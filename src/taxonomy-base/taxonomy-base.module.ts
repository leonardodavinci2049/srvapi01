import { Module } from '@nestjs/common';
import { TaxonomyBaseService } from './taxonomy-base.service';
import { TaxonomyBaseController } from './taxonomy-base.controller';

@Module({
  controllers: [TaxonomyBaseController],
  providers: [TaxonomyBaseService],
})
export class TaxonomyBaseModule {}
