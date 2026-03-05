import { Module } from '@nestjs/common';
import { TaxonomyInlineService } from './taxonomy-inline.service';
import { TaxonomyInlineController } from './taxonomy-inline.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TaxonomyInlineController],
  providers: [TaxonomyInlineService],
})
export class TaxonomyInlineModule {}
