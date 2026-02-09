import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OrderUpdService } from './order-upd.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

import { OrderUpdCustomerIdDto } from './dto/order-upd-customer-id.dto';
import { OrderUpdDiscountDto } from './dto/order-upd-discount.dto';
import { OrderUpdFreteDto } from './dto/order-upd-frete.dto';
import { OrderUpdIncreaseVlDto } from './dto/order-upd-increase-vl.dto';
import { OrderUpdNotesDto } from './dto/order-upd-notes.dto';
import { OrderUpdPgMethodIdDto } from './dto/order-upd-pg-method-id.dto';
import { OrderUpdSellerIdDto } from './dto/order-upd-seller-id.dto';
import { OrderUpdStatusIdDto } from './dto/order-upd-status-id.dto';

@Controller('order-upd')
export class OrderUpdController {
  constructor(private readonly orderUpdService: OrderUpdService) {}

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
        auth: '/api/order-upd',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-upd-customer-id')
  OrderUpdCustomerIdV2(@Body() dataJsonDto: OrderUpdCustomerIdDto) {
    return this.orderUpdService.taskOrderUpdCustomerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-upd-discount')
  OrderUpdDiscountV2(@Body() dataJsonDto: OrderUpdDiscountDto) {
    return this.orderUpdService.taskOrderUpdDiscountV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-upd-frete')
  OrderUpdFreteV2(@Body() dataJsonDto: OrderUpdFreteDto) {
    return this.orderUpdService.taskOrderUpdFreteV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-upd-increase-vl')
  OrderUpdIncreaseVlV2(@Body() dataJsonDto: OrderUpdIncreaseVlDto) {
    return this.orderUpdService.taskOrderUpdIncreaseVlV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-upd-notes')
  OrderUpdNotesV2(@Body() dataJsonDto: OrderUpdNotesDto) {
    return this.orderUpdService.taskOrderUpdNotesV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-upd-pg-method-id')
  OrderUpdPgMethodIdV2(@Body() dataJsonDto: OrderUpdPgMethodIdDto) {
    return this.orderUpdService.taskOrderUpdPgMethodIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-upd-seller-id')
  OrderUpdSellerIdV2(@Body() dataJsonDto: OrderUpdSellerIdDto) {
    return this.orderUpdService.taskOrderUpdSellerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-upd-status-id')
  OrderUpdStatusIdV2(@Body() dataJsonDto: OrderUpdStatusIdDto) {
    return this.orderUpdService.taskOrderUpdStatusIdV2(dataJsonDto);
  }
}
