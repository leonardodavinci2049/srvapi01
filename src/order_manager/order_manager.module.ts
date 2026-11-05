import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { OrderManagerController } from './order_manager.controller';
import { OrderManagerService } from './order_manager.service';

@Module({
  imports: [DbOperationModule],
  controllers: [OrderManagerController],
  providers: [OrderManagerService],
})
export class OrderManagerModule {}
