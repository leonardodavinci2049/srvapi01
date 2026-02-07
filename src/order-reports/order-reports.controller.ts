import { Controller, Get } from '@nestjs/common';
import { OrderReportsService } from './order-reports.service';

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
}
