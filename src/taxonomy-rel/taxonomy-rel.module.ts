import { Module } from '@nestjs/common';

import { TaxonomyRelService } from './taxonomy-rel.service';
import { TaxonomyRelController } from './taxonomy-rel.controller';

@Module({
  controllers: [TaxonomyRelController],
  providers: [TaxonomyRelService],
})
export class TaxonomyRelModule {}
