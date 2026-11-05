import { forwardRef, Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { AppConfigController } from './app-config.controller';
import { AppConfigService } from './app-config.service';

@Module({
  imports: [DbOperationModule, forwardRef(() => WebhookModule)],
  controllers: [AppConfigController],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
