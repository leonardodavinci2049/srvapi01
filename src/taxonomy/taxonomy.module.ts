import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyController } from './taxonomy.controller';
import { TaxonomyService } from './taxonomy.service';

@Module({
  imports: [DbOperationModule, WebhookModule],
  controllers: [TaxonomyController],
  providers: [TaxonomyService],
})
export class TaxonomyModule {}
