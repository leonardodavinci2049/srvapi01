import { Injectable } from '@nestjs/common';
import { CreateOrderReportDto } from './dto/create-order-report.dto';
import { UpdateOrderReportDto } from './dto/update-order-report.dto';

@Injectable()
export class OrderReportsService {
  create(createOrderReportDto: CreateOrderReportDto) {
    return 'This action adds a new orderReport';
  }

  findAll() {
    return `This action returns all orderReports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderReport`;
  }

  update(id: number, updateOrderReportDto: UpdateOrderReportDto) {
    return `This action updates a #${id} orderReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderReport`;
  }
}
