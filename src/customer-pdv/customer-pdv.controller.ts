import { Controller, Get, Post} from '@nestjs/common';
import { customerPdvService } from './customer-pdv.service';


@Controller('customer-pdv')
export class customerPdvController {
  constructor(private readonly customerPdvService: customerPdvService) {}

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
        auth: '/api/customer-pdv',
      },
    };
  }

  @Post()
  create() {
    return this.customerPdvService.create();
  }
}
