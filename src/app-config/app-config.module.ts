import { forwardRef, Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { AppConfigController } from './app-config.controller';
import { AppConfigService } from './app-config.service';

@Module({
  imports: [DbConnectionModule, forwardRef(() => WebhookModule)],
  controllers: [AppConfigController],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
