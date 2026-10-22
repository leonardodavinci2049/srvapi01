import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { ProductUpdateController } from './product-update.controller';
import { ProductUpdateService } from './product-update.service';

@Module({
  imports: [DatabaseModule, WebhookModule],
  controllers: [ProductUpdateController],
  providers: [ProductUpdateService],
})
export class ProductUpdateModule {}
