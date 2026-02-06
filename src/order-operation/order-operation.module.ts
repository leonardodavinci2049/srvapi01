import { Module } from '@nestjs/common';
import { OrderOperationService } from './order-operation.service';
import { OrderOperationController } from './order-operation.controller';

@Module({
  controllers: [OrderOperationController],
  providers: [OrderOperationService],
})
export class OrderOperationModule {}
