import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { CustomerInlineController } from './customer-inline.controller';
import { CustomerInlineService } from './customer-inline.service';

@Module({
  imports: [DbOperationModule],
  controllers: [CustomerInlineController],
  providers: [CustomerInlineService],
})
export class CustomerInlineModule {}
