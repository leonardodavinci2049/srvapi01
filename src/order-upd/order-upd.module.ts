import { Module } from '@nestjs/common';
import { OrderUpdService } from './order-upd.service';
import { OrderUpdController } from './order-upd.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderUpdController],
  providers: [OrderUpdService],
})
export class OrderUpdModule {}
