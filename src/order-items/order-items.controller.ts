import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { OrderItemFindAllDto } from './dto/order-item-find-all.dto';
import { OrderItemFindIdDto } from './dto/order-item-find-id.dto';
import { OrderItemUpdAdditionDto } from './dto/order-item-upd-addition.dto';
import { OrderItemUpdDiscountDto } from './dto/order-item-upd-discount.dto';
import { OrderItemUpdDiscountAdmDto } from './dto/order-item-upd-discount-adm.dto';
import { OrderItemUpdInsuranceVlDto } from './dto/order-item-upd-insurance-vl.dto';
import { OrderItemUpdNotesDto } from './dto/order-item-upd-notes.dto';
import { OrderItemUpdQtDto } from './dto/order-item-upd-qt.dto';
import { OrderItemDeleteDto } from './dto/order-item-delete.dto';
import { OrderItemUpdValueDto } from './dto/order-item-upd-value.dto';
import { OrderItemUpdFreteVlDto } from './dto/order-item-upd-frete-vl.dto';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

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
        auth: '/api/order-items',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-find-id')
  OrderItemsFindIdV2(@Body() dataJsonDto: OrderItemFindIdDto) {
    return this.orderItemsService.tskOrderItemsFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-find')
  OrderItemsFindV2(@Body() dataJsonDto: OrderItemFindAllDto) {
    return this.orderItemsService.tskOrderItemsFindV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-Addition')
  orderItemUpdAdditionV2(@Body() dataJsonDto: OrderItemUpdAdditionDto) {
    return this.orderItemsService.tskorderItemUpdAdditionV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-Discount-Adm')
  orderItemUpdDiscountAdmV2(@Body() dataJsonDto: OrderItemUpdDiscountAdmDto) {
    return this.orderItemsService.tskorderItemUpdDiscountAdmV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-Discount')
  orderItemUpdDiscountV2(@Body() dataJsonDto: OrderItemUpdDiscountDto) {
    return this.orderItemsService.tskorderItemUpdDiscountV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-Insurance')
  orderItemUpdInsuranceVlV2(@Body() dataJsonDto: OrderItemUpdInsuranceVlDto) {
    return this.orderItemsService.tskorderItemUpdInsuranceV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-Frete-vl')
  orderItemUpdFreteVlV2(@Body() dataJsonDto: OrderItemUpdFreteVlDto) {
    return this.orderItemsService.tskorderItemUpdFreteVlV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-Notes')
  orderItemUpdNotesV2(@Body() dataJsonDto: OrderItemUpdNotesDto) {
    return this.orderItemsService.tskorderItemUpdNotesV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-Qt')
  orderItemUpdQtV2(@Body() dataJsonDto: OrderItemUpdQtDto) {
    return this.orderItemsService.tskorderItemUpdQtV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-Value')
  orderItemUpdValueV2(@Body() dataJsonDto: OrderItemUpdValueDto) {
    return this.orderItemsService.tskorderItemUpdValueV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Order-items-Delete')
  orderItemDeleteV2(@Body() dataJsonDto: OrderItemDeleteDto) {
    return this.orderItemsService.tskorderItemDeleteV2(dataJsonDto);
  }
}
