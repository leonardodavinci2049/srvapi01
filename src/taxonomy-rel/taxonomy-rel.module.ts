import { Module } from '@nestjs/common';

import { TaxonomyRelService } from './taxonomy-rel.service';
import { TaxonomyRelController } from './taxonomy-rel.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TaxonomyRelController],
  providers: [TaxonomyRelService],
})
export class TaxonomyRelModule {}
