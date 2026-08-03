import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OrderUpdController } from './order-upd.controller';
import { OrderUpdService } from './order-upd.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderUpdController],
  providers: [OrderUpdService],
})
export class OrderUpdModule {}
