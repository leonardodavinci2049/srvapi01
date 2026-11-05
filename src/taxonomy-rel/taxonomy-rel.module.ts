import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyRelController } from './taxonomy-rel.controller';
import { TaxonomyRelService } from './taxonomy-rel.service';

@Module({
  imports: [DbOperationModule, WebhookModule],
  controllers: [TaxonomyRelController],
  providers: [TaxonomyRelService],
})
export class TaxonomyRelModule {}
