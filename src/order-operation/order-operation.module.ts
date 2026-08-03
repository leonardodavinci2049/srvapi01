import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OrderOperationController } from './order-operation.controller';
import { OrderOperationService } from './order-operation.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderOperationController],
  providers: [OrderOperationService],
})
export class OrderOperationModule {}
