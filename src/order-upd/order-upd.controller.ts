import { Controller, Get } from '@nestjs/common';
import { OrderUpdService } from './order-upd.service';

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
        auth: '/api/order-operation',
      },
    };
  }
}
