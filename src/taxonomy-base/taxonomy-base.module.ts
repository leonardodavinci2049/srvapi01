import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyBaseController } from './taxonomy-base.controller';
import { TaxonomyBaseService } from './taxonomy-base.service';

@Module({
  imports: [DbOperationModule, WebhookModule],
  controllers: [TaxonomyBaseController],
  providers: [TaxonomyBaseService],
})
export class TaxonomyBaseModule {}
