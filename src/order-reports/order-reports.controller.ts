import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderReportsService } from './order-reports.service';
import { CreateOrderReportDto } from './dto/create-order-report.dto';
import { UpdateOrderReportDto } from './dto/update-order-report.dto';

@Controller('order-reports')
export class OrderReportsController {
  constructor(private readonly orderReportsService: OrderReportsService) {}

  @Post()
  create(@Body() createOrderReportDto: CreateOrderReportDto) {
    return this.orderReportsService.create(createOrderReportDto);
  }

  @Get()
  findAll() {
    return this.orderReportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderReportsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderReportDto: UpdateOrderReportDto) {
    return this.orderReportsService.update(+id, updateOrderReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderReportsService.remove(+id);
  }
}
