import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { WebhookModule } from 'src/webhook/webhook.module';
import { TaxonomyController } from './taxonomy.controller';
import { TaxonomyService } from './taxonomy.service';

@Module({
  imports: [DbConnectionModule, WebhookModule],
  controllers: [TaxonomyController],
  providers: [TaxonomyService],
})
export class TaxonomyModule {}
