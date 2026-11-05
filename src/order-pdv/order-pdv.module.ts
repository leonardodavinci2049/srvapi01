import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { OrderPdvController } from './order-pdv.controller';
import { OrderPdvService } from './order-pdv.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [OrderPdvController],
  providers: [OrderPdvService],
})
export class OrderPdvModule {}
