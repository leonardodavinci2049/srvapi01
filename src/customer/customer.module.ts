import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [DbOperationModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
