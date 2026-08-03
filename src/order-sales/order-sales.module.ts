import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OrderSalesController } from './order-sales.controller';
import { OrderSalesService } from './order-sales.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderSalesController],
  providers: [OrderSalesService],
})
export class OrderSalesModule {}
