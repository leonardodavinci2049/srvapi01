import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { OrderReportsController } from './order-reports.controller';
import { OrderReportsService } from './order-reports.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [OrderReportsController],
  providers: [OrderReportsService],
})
export class OrderReportsModule {}
