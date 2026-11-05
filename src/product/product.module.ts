import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [DbConnectionModule, WebhookModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
