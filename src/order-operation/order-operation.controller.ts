import { Controller, Get } from '@nestjs/common';
import { OrderOperationService } from './order-operation.service';

@Controller('order-operation')
export class OrderOperationController {
  constructor(private readonly orderOperationService: OrderOperationService) {}

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
