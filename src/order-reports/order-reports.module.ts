import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OrderReportsController } from './order-reports.controller';
import { OrderReportsService } from './order-reports.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderReportsController],
  providers: [OrderReportsService],
})
export class OrderReportsModule {}
