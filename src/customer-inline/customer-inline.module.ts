import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { CustomerInlineController } from './customer-inline.controller';
import { CustomerInlineService } from './customer-inline.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [CustomerInlineController],
  providers: [CustomerInlineService],
})
export class CustomerInlineModule {}
