import { Module } from '@nestjs/common';
import { OrderUpdService } from './order-upd.service';
import { OrderUpdController } from './order-upd.controller';

@Module({
  controllers: [OrderUpdController],
  providers: [OrderUpdService],
})
export class OrderUpdModule {}
