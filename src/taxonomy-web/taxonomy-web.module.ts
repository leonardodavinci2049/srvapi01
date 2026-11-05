import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { TaxonomyWebController } from './taxonomy-web.controller';
import { TaxonomyWebService } from './taxonomy-web.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [TaxonomyWebController],
  providers: [TaxonomyWebService],
})
export class TaxonomyWebModule {}
