import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { ProductBaseController } from './product-base.controller';
import { ProductBaseService } from './product-base.service';

@Module({
  imports: [DbOperationModule, WebhookModule],
  controllers: [ProductBaseController],
  providers: [ProductBaseService],
})
export class ProductBaseModule {}
