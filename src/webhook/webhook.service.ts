import { Injectable } from '@nestjs/common';
import { AppConfigService } from '../app-config/app-config.service.js';
import { envs } from '../core/config/envs.js';
import {
  WEBHOOK_SOURCE_FIELDS,
  type WebhookDispatchResult,
  type WebhookErrorCode,
  type WebhookSourceField,
} from './types/webhook.type.js';

/** Payload fixo esperado pelos receptores de revalidação. */
const PRODUCTS_ALL_PAYLOAD = { module: 'products', scope: 'all' } as const;

/** Timeout curto: o fluxo de origem nunca aguarda o webhook. */
const WEBHOOK_TIMEOUT_MS = 5000;

interface WebhookTarget {
  field: WebhookSourceField;
  url: string;
}

@Injectable()
export class WebhookService {
  constructor(private readonly appConfigService: AppConfigService) {}

  /**
   * Aciona em paralelo os webhooks (`webhookApp1|2|3`) configurados para o
   * cliente, com o payload fixo `products/all`. Best-effort: nunca lança para
   * o chamador e não registra log nesta etapa. Cliente ausente ou menor que 1
   * não aciona nada.
   */
  async notifyProductsAll(
    systemClientId?: number | null,
  ): Promise<WebhookDispatchResult[]> {
    if (!this.isValidSystemClientId(systemClientId)) {
      return [];
    }

    try {
      const appConfigResult = await this.appConfigService.taskAppConfigIdV2({
        pe_system_client_id: systemClientId,
      });
      const targets = this.collectTargets(
        this.extractRows(appConfigResult.data),
      );

      if (targets.length === 0) {
        return [];
      }

      const settled = await Promise.allSettled(
        targets.map((target) => this.dispatch(target)),
      );

      return settled.map((outcome, index) =>
        outcome.status === 'fulfilled'
          ? outcome.value
          : this.buildFailure(targets[index], 'NETWORK_ERROR'),
      );
    } catch {
      // Sem configuração, falha de consulta ou qualquer erro inesperado: o
      // fluxo de origem segue normalmente.
      return [];
    }
  }

  private isValidSystemClientId(
    systemClientId?: number | null,
  ): systemClientId is number {
    return (
      typeof systemClientId === 'number' &&
      Number.isInteger(systemClientId) &&
      systemClientId >= 1
    );
  }

  /** Extrai as linhas do conjunto `AppConfig` sem confiar no formato. */
  private extractRows(data: unknown): unknown[] {
    if (typeof data !== 'object' || data === null) {
      return [];
    }

    const rows = (data as { AppConfig?: unknown }).AppConfig;
    return Array.isArray(rows) ? rows : [];
  }

  /** Coleta somente URLs `http`/`https` não vazias dos três campos. */
  private collectTargets(rows: unknown[]): WebhookTarget[] {
    const targets: WebhookTarget[] = [];

    for (const row of rows) {
      if (typeof row !== 'object' || row === null) {
        continue;
      }

      const record = row as Partial<Record<WebhookSourceField, unknown>>;

      for (const field of WEBHOOK_SOURCE_FIELDS) {
        const value = record[field];
        if (typeof value !== 'string') {
          continue;
        }

        const url = value.trim();
        if (!this.isHttpUrl(url)) {
          continue;
        }

        targets.push({ field, url });
      }
    }

    return targets;
  }

  private isHttpUrl(value: string): boolean {
    if (value === '') {
      return false;
    }

    try {
      const { protocol } = new URL(value);
      return protocol === 'http:' || protocol === 'https:';
    } catch {
      return false;
    }
  }

  /** POST de revalidação; converte qualquer falha em resultado sanitizado. */
  private async dispatch(
    target: WebhookTarget,
  ): Promise<WebhookDispatchResult> {
    try {
      const response = await fetch(target.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-revalidate-secret': envs.REVALIDATE_SECRET,
        },
        body: JSON.stringify(PRODUCTS_ALL_PAYLOAD),
        signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
      });

      // O corpo do receptor não é lido nem registrado.
      await response.body?.cancel().catch(() => undefined);

      if (!response.ok) {
        return {
          field: target.field,
          url: target.url,
          success: false,
          status: response.status,
          error: 'HTTP_ERROR',
        };
      }

      return {
        field: target.field,
        url: target.url,
        success: true,
        status: response.status,
      };
    } catch (error: unknown) {
      return this.buildFailure(target, this.classifyError(error));
    }
  }

  private classifyError(error: unknown): WebhookErrorCode {
    if (
      error instanceof Error &&
      (error.name === 'TimeoutError' || error.name === 'AbortError')
    ) {
      return 'TIMEOUT';
    }

    return 'NETWORK_ERROR';
  }

  private buildFailure(
    target: WebhookTarget,
    error: WebhookErrorCode,
  ): WebhookDispatchResult {
    return {
      field: target.field,
      url: target.url,
      success: false,
      status: null,
      error,
    };
  }
}
