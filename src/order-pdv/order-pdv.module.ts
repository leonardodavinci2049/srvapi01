import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OrderPdvController } from './order-pdv.controller';
import { OrderPdvService } from './order-pdv.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderPdvController],
  providers: [OrderPdvService],
})
export class OrderPdvModule {}
