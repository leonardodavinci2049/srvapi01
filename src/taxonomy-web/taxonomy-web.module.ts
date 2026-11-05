import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { TaxonomyWebController } from './taxonomy-web.controller';
import { TaxonomyWebService } from './taxonomy-web.service';

@Module({
  imports: [DbOperationModule],
  controllers: [TaxonomyWebController],
  providers: [TaxonomyWebService],
})
export class TaxonomyWebModule {}
