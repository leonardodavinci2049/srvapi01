import { Module } from '@nestjs/common';
import { TaxonomyBaseService } from './taxonomy-base.service';
import { TaxonomyBaseController } from './taxonomy-base.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TaxonomyBaseController],
  providers: [TaxonomyBaseService],
})
export class TaxonomyBaseModule {}
