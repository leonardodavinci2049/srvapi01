import { Module } from '@nestjs/common';
import { OrderPdvService } from './order-pdv.service';
import { OrderPdvController } from './order-pdv.controller';

@Module({
  controllers: [OrderPdvController],
  providers: [OrderPdvService],
})
export class OrderPdvModule {}
