import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { OrderUpdController } from './order-upd.controller';
import { OrderUpdService } from './order-upd.service';

@Module({
  imports: [DbOperationModule],
  controllers: [OrderUpdController],
  providers: [OrderUpdService],
})
export class OrderUpdModule {}
