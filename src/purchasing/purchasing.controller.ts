import { Controller, Get, Post, } from '@nestjs/common';
import { PurchasingService } from './purchasing.service';


@Controller('purchasing')
export class PurchasingController {
  constructor(private readonly purchasingService: PurchasingService) {}

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
        auth: '/api/purchasing',
      },
    };
  }


  @Post()
 findAll() {
    return this.purchasingService.findAll();
  }


 
}
