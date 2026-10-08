import { Controller, Get, Post} from '@nestjs/common';
import { CostumerPdvService } from './costumer-pdv.service';


@Controller('costumer-pdv')
export class CostumerPdvController {
  constructor(private readonly costumerPdvService: CostumerPdvService) {}

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
        auth: '/api/costumer-pdv',
      },
    };
  }

  @Post()
  create() {
    return this.costumerPdvService.create();
  }
}
