import { Module } from '@nestjs/common';
import { OrderReportsService } from './order-reports.service';
import { OrderReportsController } from './order-reports.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderReportsController],
  providers: [OrderReportsService],
})
export class OrderReportsModule {}
