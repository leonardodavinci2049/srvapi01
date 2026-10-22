import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyBaseController } from './taxonomy-base.controller';
import { TaxonomyBaseService } from './taxonomy-base.service';

@Module({
  imports: [DatabaseModule, WebhookModule],
  controllers: [TaxonomyBaseController],
  providers: [TaxonomyBaseService],
})
export class TaxonomyBaseModule {}
