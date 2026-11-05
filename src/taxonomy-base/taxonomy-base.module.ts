import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyBaseController } from './taxonomy-base.controller';
import { TaxonomyBaseService } from './taxonomy-base.service';

@Module({
  imports: [DbConnectionModule, WebhookModule],
  controllers: [TaxonomyBaseController],
  providers: [TaxonomyBaseService],
})
export class TaxonomyBaseModule {}
