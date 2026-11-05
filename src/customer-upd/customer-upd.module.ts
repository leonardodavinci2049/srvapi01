import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { CustomerUpdController } from './customer-upd.controller';
import { CustomerUpdService } from './customer-upd.service';

@Module({
  imports: [DbOperationModule],
  controllers: [CustomerUpdController],
  providers: [CustomerUpdService],
})
export class CustomerUpdModule {}
