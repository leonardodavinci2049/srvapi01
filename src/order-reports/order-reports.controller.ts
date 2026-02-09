import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OrderReportsService } from './order-reports.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { OrdersFindAllDto } from './dto/orders-find-all.dto';
import { OrdersFindCustomerAllDto } from './dto/orders-find-customer-all.dto';
import { OrdersFindCustomerIdDto } from './dto/orders-find-customer-id.dto';
import { OrdersFindLatestDto } from './dto/orders-find-latest.dto';
import { OrdersFindSellerAllDto } from './dto/orders-find-seller-all.dto';
import { OrdersFindSellerIdDto } from './dto/orders-find-seller-id.dto';
import { OrdersFindIdDto } from './dto/orders-find-id.dto';

@Controller('order-reports')
export class OrderReportsController {
  constructor(private readonly orderReportsService: OrderReportsService) {}

  @Get()
  getHello() {
    return {
      name: 'Wholesale API',
      status: 'online',
      version: '1.0.1',
      documentation: '/',
      timestamp: new Date().toISOString(),
      endpoints: {
        base: '/api',
        auth: '/api/order-operation',
      },
    };
  }
  @UseGuards(AuthGuard)
  @Post('v2/order-find-all')
  OrdersFindAllV2(@Body() dataJsonDto: OrdersFindAllDto) {
    return this.orderReportsService.taskOrdersFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-customer-all')
  OrdersFindCustomerAllV2(@Body() dataJsonDto: OrdersFindCustomerAllDto) {
    return this.orderReportsService.taskOrdersFindCustomerAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-customer-id')
  OrdersFindCustomerIdV2(@Body() dataJsonDto: OrdersFindCustomerIdDto) {
    return this.orderReportsService.taskOrdersFindCustomerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-id')
  OrdersFindIdQueryV2(@Body() dataJsonDto: OrdersFindIdDto) {
    return this.orderReportsService.taskOrdersFindIdQueryV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-latest')
  OrdersFindLatestV2(@Body() dataJsonDto: OrdersFindLatestDto) {
    return this.orderReportsService.taskOrdersFindLatestV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-seller-all')
  OrdersFindSellerAllV2(@Body() dataJsonDto: OrdersFindSellerAllDto) {
    return this.orderReportsService.taskOrdersFindSellerAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-seller-id')
  OrdersFindSellerIdV2(@Body() dataJsonDto: OrdersFindSellerIdDto) {
    return this.orderReportsService.taskOrdersFindSellerIdV2(dataJsonDto);
  }
}
