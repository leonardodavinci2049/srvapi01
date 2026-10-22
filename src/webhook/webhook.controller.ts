import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../core/guards/auth.guard.js';
import { WebhookTestTriggerDto } from './dto/webhook-test-trigger.dto.js';
import { WebhookService } from './webhook.service.js';
import type { WebhookTestTriggerResponse } from './types/webhook.type.js';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @UseGuards(AuthGuard)
  @Post('v2/webhook-test-trigger')
  async testTrigger(
    @Body() dataJsonDto: WebhookTestTriggerDto,
  ): Promise<WebhookTestTriggerResponse> {
    const results = await this.webhookService.notifyProductsAll(
      dataJsonDto.pe_system_client_id,
    );

    if (results.length === 0) {
      return {
        success: false,
        message: 'Nenhum webhook configurado para o cliente informado',
        results,
      };
    }

    const success = results.every((result) => result.success);

    return {
      success,
      message: success
        ? 'Webhooks acionados com sucesso'
        : 'Um ou mais webhooks falharam',
      results,
    };
  }
}
