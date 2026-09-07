import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderManagerService } from './order_manager.service';

@Controller('order-manager')
export class OrderManagerController {
  constructor(private readonly orderManagerService: OrderManagerService) {}

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
        auth: '/api/order-manager',
      },
    };
  }

  @Post()
  create() {
    return this.orderManagerService.create();
  }

}
