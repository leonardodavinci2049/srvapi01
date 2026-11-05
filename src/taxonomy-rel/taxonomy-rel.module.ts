import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyRelController } from './taxonomy-rel.controller';
import { TaxonomyRelService } from './taxonomy-rel.service';

@Module({
  imports: [DbConnectionModule, WebhookModule],
  controllers: [TaxonomyRelController],
  providers: [TaxonomyRelService],
})
export class TaxonomyRelModule {}
