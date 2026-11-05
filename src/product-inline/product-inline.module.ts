import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { ProductInlineController } from './product-inline.controller';
import { ProductInlineService } from './product-inline.service';

@Module({
  imports: [DbConnectionModule, WebhookModule],
  controllers: [ProductInlineController],
  providers: [ProductInlineService],
})
export class ProductInlineModule {}
