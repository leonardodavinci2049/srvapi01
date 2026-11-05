import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { CustomerPdvController } from './customer-pdv.controller';
import { CustomerPdvService } from './customer-pdv.service';

@Module({
  imports: [DbOperationModule],
  controllers: [CustomerPdvController],
  providers: [CustomerPdvService],
})
export class CustomerPdvModule {}
