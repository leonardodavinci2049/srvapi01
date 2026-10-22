import { forwardRef, Module } from '@nestjs/common';
import { AppConfigModule } from 'src/app-config/app-config.module';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';

@Module({
  imports: [forwardRef(() => AppConfigModule)],
  controllers: [WebhookController],
  providers: [WebhookService],
  exports: [WebhookService],
})
export class WebhookModule {}
