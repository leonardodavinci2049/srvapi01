import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { OrderSalesController } from './order-sales.controller';
import { OrderSalesService } from './order-sales.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [OrderSalesController],
  providers: [OrderSalesService],
})
export class OrderSalesModule {}
