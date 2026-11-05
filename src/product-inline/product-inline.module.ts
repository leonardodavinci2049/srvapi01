import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { ProductInlineController } from './product-inline.controller';
import { ProductInlineService } from './product-inline.service';

@Module({
  imports: [DbOperationModule, WebhookModule],
  controllers: [ProductInlineController],
  providers: [ProductInlineService],
})
export class ProductInlineModule {}
