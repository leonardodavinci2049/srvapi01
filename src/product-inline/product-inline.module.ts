import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { ProductInlineController } from './product-inline.controller';
import { ProductInlineService } from './product-inline.service';

@Module({
  imports: [DatabaseModule, WebhookModule],
  controllers: [ProductInlineController],
  providers: [ProductInlineService],
})
export class ProductInlineModule {}
