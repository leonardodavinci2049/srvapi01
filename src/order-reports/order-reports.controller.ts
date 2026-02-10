import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OrderReportsService } from './order-reports.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

import { OrdersFindCustomerAllDto } from './dto/orders-find-customer-all.dto';
import { OrdersFindCustomerIdDto } from './dto/orders-find-customer-id.dto';

import { OrdersFindSellerAllDto } from './dto/orders-find-seller-all.dto';
import { OrdersFindSellerIdDto } from './dto/orders-find-seller-id.dto';

import { OrdersFindLatestAllDto } from './dto/orders-find-latest-all.dto';
import { OrdersFindLatestIdDto } from './dto/orders-find-latest-id.dto';
import { OrdersFindSaleAllDto } from './dto/orders-find-sale-all.dto';
import { OrdersFindSaleIdDto } from './dto/orders-find-sale-id.dto';

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
  @Post('v2/order-find-sale-all')
  OrdersFindSaleAllV2(@Body() dataJsonDto: OrdersFindSaleAllDto) {
    return this.orderReportsService.taskOrdersFindSaleAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-sale-id')
  OrdersFindSaleIdV2(@Body() dataJsonDto: OrdersFindSaleIdDto) {
    return this.orderReportsService.taskOrdersFindSaleIdV2(dataJsonDto);
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
  @Post('v2/order-find-seller-all')
  OrdersFindSellerAllV2(@Body() dataJsonDto: OrdersFindSellerAllDto) {
    return this.orderReportsService.taskOrdersFindSellerAllV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/order-find-seller-id')
  OrdersFindSellerIdV2(@Body() dataJsonDto: OrdersFindSellerIdDto) {
    return this.orderReportsService.taskOrdersFindSellerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-latest-all')
  OrdersFindLatestAllV2(@Body() dataJsonDto: OrdersFindLatestAllDto) {
    return this.orderReportsService.taskOrdersFindLatestAllV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/order-find-latest-id')
  OrdersFindLatestIdV2(@Body() dataJsonDto: OrdersFindLatestIdDto) {
    return this.orderReportsService.taskOrdersFindLatestIdV2(dataJsonDto);
  }
}
