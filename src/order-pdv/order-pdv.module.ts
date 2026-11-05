import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { OrderPdvController } from './order-pdv.controller';
import { OrderPdvService } from './order-pdv.service';

@Module({
  imports: [DbOperationModule],
  controllers: [OrderPdvController],
  providers: [OrderPdvService],
})
export class OrderPdvModule {}
