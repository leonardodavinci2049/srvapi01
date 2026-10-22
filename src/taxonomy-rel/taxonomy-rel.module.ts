import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyRelController } from './taxonomy-rel.controller';
import { TaxonomyRelService } from './taxonomy-rel.service';

@Module({
  imports: [DatabaseModule, WebhookModule],
  controllers: [TaxonomyRelController],
  providers: [TaxonomyRelService],
})
export class TaxonomyRelModule {}
