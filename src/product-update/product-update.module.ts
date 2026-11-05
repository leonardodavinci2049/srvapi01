import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { ProductUpdateController } from './product-update.controller';
import { ProductUpdateService } from './product-update.service';

@Module({
  imports: [DbOperationModule, WebhookModule],
  controllers: [ProductUpdateController],
  providers: [ProductUpdateService],
})
export class ProductUpdateModule {}
