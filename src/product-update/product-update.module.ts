import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { ProductUpdateController } from './product-update.controller';
import { ProductUpdateService } from './product-update.service';

@Module({
  imports: [DbConnectionModule, WebhookModule],
  controllers: [ProductUpdateController],
  providers: [ProductUpdateService],
})
export class ProductUpdateModule {}
