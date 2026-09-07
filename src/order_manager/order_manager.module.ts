import { Module } from '@nestjs/common';
import { OrderManagerService } from './order_manager.service';
import { OrderManagerController } from './order_manager.controller';

@Module({
  controllers: [OrderManagerController],
  providers: [OrderManagerService],
})
export class OrderManagerModule {}
