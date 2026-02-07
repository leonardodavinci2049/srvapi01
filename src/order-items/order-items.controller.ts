import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { OrderItemFindAllDto } from './dto/order-item-find-all.dto';

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
  @Post('v2/Order-items-find')
  OrderItemsFindV2(@Body() dataJsonDto: OrderItemFindAllDto) {
    return this.orderItemsService.tskOrderItemsFindV2(dataJsonDto);
  }
}
