import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TaxonomyInlineController } from './taxonomy-inline.controller';
import { TaxonomyInlineService } from './taxonomy-inline.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TaxonomyInlineController],
  providers: [TaxonomyInlineService],
})
export class TaxonomyInlineModule {}
