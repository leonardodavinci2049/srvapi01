import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { WebhookTestTriggerDto } from './dto/webhook-test-trigger.dto';
import type { WebhookTestTriggerResponse } from './types/webhook.type';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @UseGuards(AuthGuard)
  @Post('v2/webhook-test-trigger')
  async testTrigger(
    @Body() dataJsonDto: WebhookTestTriggerDto,
  ): Promise<WebhookTestTriggerResponse> {
    return this.webhookService.notifyProductsAll(
      dataJsonDto.pe_system_client_id,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/webhook-test-trigger-app-config')
  async testTriggerAppConfig(
    @Body() dataJsonDto: WebhookTestTriggerDto,
  ): Promise<WebhookTestTriggerResponse> {
    return this.webhookService.notifyAppConfigAll(
      dataJsonDto.pe_system_client_id,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/webhook-test-trigger-taxonomy')
  async testTriggerTaxonomy(
    @Body() dataJsonDto: WebhookTestTriggerDto,
  ): Promise<WebhookTestTriggerResponse> {
    return this.webhookService.notifyTaxonomyAll(
      dataJsonDto.pe_system_client_id,
    );
  }
}
