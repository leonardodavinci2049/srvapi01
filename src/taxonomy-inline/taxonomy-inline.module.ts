import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyInlineController } from './taxonomy-inline.controller';
import { TaxonomyInlineService } from './taxonomy-inline.service';

@Module({
  imports: [DbConnectionModule, WebhookModule],
  controllers: [TaxonomyInlineController],
  providers: [TaxonomyInlineService],
})
export class TaxonomyInlineModule {}
