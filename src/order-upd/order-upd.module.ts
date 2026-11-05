import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { OrderUpdController } from './order-upd.controller';
import { OrderUpdService } from './order-upd.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [OrderUpdController],
  providers: [OrderUpdService],
})
export class OrderUpdModule {}
