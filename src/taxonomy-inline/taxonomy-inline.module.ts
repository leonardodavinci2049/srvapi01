import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyInlineController } from './taxonomy-inline.controller';
import { TaxonomyInlineService } from './taxonomy-inline.service';

@Module({
  imports: [DatabaseModule, WebhookModule],
  controllers: [TaxonomyInlineController],
  providers: [TaxonomyInlineService],
})
export class TaxonomyInlineModule {}
