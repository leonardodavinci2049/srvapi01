import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { ProductBaseController } from './product-base.controller';
import { ProductBaseService } from './product-base.service';

@Module({
  imports: [DbConnectionModule, WebhookModule],
  controllers: [ProductBaseController],
  providers: [ProductBaseService],
})
export class ProductBaseModule {}
