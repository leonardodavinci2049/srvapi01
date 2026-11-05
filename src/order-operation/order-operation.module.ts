import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { OrderOperationController } from './order-operation.controller';
import { OrderOperationService } from './order-operation.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [OrderOperationController],
  providers: [OrderOperationService],
})
export class OrderOperationModule {}
