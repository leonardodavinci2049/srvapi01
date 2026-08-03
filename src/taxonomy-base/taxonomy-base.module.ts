import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TaxonomyBaseController } from './taxonomy-base.controller';
import { TaxonomyBaseService } from './taxonomy-base.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TaxonomyBaseController],
  providers: [TaxonomyBaseService],
})
export class TaxonomyBaseModule {}
