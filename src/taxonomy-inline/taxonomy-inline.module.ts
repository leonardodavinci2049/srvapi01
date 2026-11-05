import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyInlineController } from './taxonomy-inline.controller';
import { TaxonomyInlineService } from './taxonomy-inline.service';

@Module({
  imports: [DbOperationModule, WebhookModule],
  controllers: [TaxonomyInlineController],
  providers: [TaxonomyInlineService],
})
export class TaxonomyInlineModule {}
