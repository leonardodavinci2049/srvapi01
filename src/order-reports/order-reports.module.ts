import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { OrderReportsController } from './order-reports.controller';
import { OrderReportsService } from './order-reports.service';

@Module({
  imports: [DbOperationModule],
  controllers: [OrderReportsController],
  providers: [OrderReportsService],
})
export class OrderReportsModule {}
