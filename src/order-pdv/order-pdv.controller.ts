import { Controller, Get, Post} from '@nestjs/common';
import { OrderPdvService } from './order-pdv.service';


@Controller('order-pdv')
export class OrderPdvController {
  constructor(private readonly orderPdvService: OrderPdvService) {}

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
        auth: '/api/order-pdv',
      },
    };
  }

  @Post()
  create() {
    return this.orderPdvService.create();
  }
}
