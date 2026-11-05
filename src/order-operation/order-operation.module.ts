import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { OrderOperationController } from './order-operation.controller';
import { OrderOperationService } from './order-operation.service';

@Module({
  imports: [DbOperationModule],
  controllers: [OrderOperationController],
  providers: [OrderOperationService],
})
export class OrderOperationModule {}
