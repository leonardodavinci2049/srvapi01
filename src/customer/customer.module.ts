import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
