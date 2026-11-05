import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { OrderSalesController } from './order-sales.controller';
import { OrderSalesService } from './order-sales.service';

@Module({
  imports: [DbOperationModule],
  controllers: [OrderSalesController],
  providers: [OrderSalesService],
})
export class OrderSalesModule {}
