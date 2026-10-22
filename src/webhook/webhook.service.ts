import { Injectable } from '@nestjs/common';
import { AppConfigService } from 'src/app-config/app-config.service';
import { envs } from 'src/core/config/envs';
import {
  WEBHOOK_SOURCE_FIELDS,
  type WebhookDispatchResult,
  type WebhookErrorCode,
  type WebhookSourceField,
  type WebhookTestTriggerResponse,
} from './types/webhook.type';

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

  /** Aciona em paralelo os webhooks configurados com o payload fixo `products/all`. */
  async notifyProductsAll(
    systemClientId?: number | null,
  ): Promise<WebhookTestTriggerResponse> {
    if (!this.isValidSystemClientId(systemClientId)) {
      return {
        success: false,
        message: 'ID do cliente do sistema inválido',
        results: [],
      };
    }

    let appConfigResult: unknown;
    try {
      appConfigResult =
        await this.appConfigService.taskAppConfigFindWebhookIdV2({
          pe_system_client_id: systemClientId,
        });
    } catch {
      return {
        success: false,
        message: 'Não foi possível carregar a configuração dos webhooks',
        results: [],
      };
    }

    if (!this.isSuccessfulAppConfigResult(appConfigResult)) {
      return {
        success: false,
        message: 'Não foi possível carregar a configuração dos webhooks',
        results: [],
      };
    }

    const targets = this.collectTargets(this.extractRows(appConfigResult));

    if (targets.length === 0) {
      return {
        success: false,
        message: 'Nenhum webhook configurado para o cliente informado',
        results: [],
      };
    }

    const settled = await Promise.allSettled(
      targets.map((target) => this.dispatch(target)),
    );
    const results = settled.map((outcome, index) =>
      outcome.status === 'fulfilled'
        ? outcome.value
        : this.buildFailure(targets[index], 'NETWORK_ERROR'),
    );
    const success = results.every((result) => result.success);

    return {
      success,
      message: success
        ? 'Webhooks acionados com sucesso'
        : 'Um ou mais webhooks falharam',
      results,
    };
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

    const resultData = (data as { data?: unknown }).data;
    if (typeof resultData !== 'object' || resultData === null) {
      return [];
    }

    const rows = (resultData as { 'App Config'?: unknown })['App Config'];
    return Array.isArray(rows) ? rows : [];
  }

  private isSuccessfulAppConfigResult(result: unknown): boolean {
    if (typeof result !== 'object' || result === null) {
      return false;
    }

    return (result as { statusCode?: unknown }).statusCode === 100200;
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
    if (!envs.REVALIDATE_SECRET) {
      return this.buildFailure(target, 'CONFIGURATION_ERROR');
    }

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
          success: false,
          status: response.status,
          error: 'HTTP_ERROR',
        };
      }

      return {
        field: target.field,
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
      success: false,
      status: null,
      error,
    };
  }
}
