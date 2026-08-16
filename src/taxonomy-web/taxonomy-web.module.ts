import { Module } from '@nestjs/common';
import { TaxonomyWebService } from './taxonomy-web.service';
import { TaxonomyWebController } from './taxonomy-web.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TaxonomyWebController],
  providers: [TaxonomyWebService],
})
export class TaxonomyWebModule {}
