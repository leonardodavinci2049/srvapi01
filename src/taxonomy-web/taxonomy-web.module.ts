import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TaxonomyWebController } from './taxonomy-web.controller';
import { TaxonomyWebService } from './taxonomy-web.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TaxonomyWebController],
  providers: [TaxonomyWebService],
})
export class TaxonomyWebModule {}
