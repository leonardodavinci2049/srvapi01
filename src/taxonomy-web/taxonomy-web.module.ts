import { Module } from '@nestjs/common';
import { TaxonomyWebService } from './taxonomy-web.service';
import { TaxonomyWebController } from './taxonomy-web.controller';

@Module({
  controllers: [TaxonomyWebController],
  providers: [TaxonomyWebService],
})
export class TaxonomyWebModule {}
