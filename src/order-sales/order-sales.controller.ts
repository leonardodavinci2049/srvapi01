import { Controller, Get } from '@nestjs/common';
import { OrderSalesService } from './order-sales.service';

@Controller('order-sales')
export class OrderSalesController {
  constructor(private readonly orderSalesService: OrderSalesService) {}

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
}
