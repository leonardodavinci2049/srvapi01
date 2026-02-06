import { Module } from '@nestjs/common';
import { OrderReportsService } from './order-reports.service';
import { OrderReportsController } from './order-reports.controller';

@Module({
  controllers: [OrderReportsController],
  providers: [OrderReportsService],
})
export class OrderReportsModule {}
