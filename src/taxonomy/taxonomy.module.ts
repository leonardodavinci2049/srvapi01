import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TaxonomyController } from './taxonomy.controller';
import { TaxonomyService } from './taxonomy.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TaxonomyController],
  providers: [TaxonomyService],
})
export class TaxonomyModule {}
