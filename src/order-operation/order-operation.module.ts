import { Module } from '@nestjs/common';
import { OrderOperationService } from './order-operation.service';
import { OrderOperationController } from './order-operation.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderOperationController],
  providers: [OrderOperationService],
})
export class OrderOperationModule {}
