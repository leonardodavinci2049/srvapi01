import { Controller, Get, Post } from '@nestjs/common';
import { ProductWholesaleService } from './product-wholesale.service';


@Controller('product-wholesale')
export class ProductWholesaleController {
  constructor(
    private readonly productWholesaleService: ProductWholesaleService,
  ) {}

  @Get()
  getHello() {
    return {
      name: 'Product Wholesale API',
      status: 'online',
      version: '1.0.1',
      documentation: '/',
      timestamp: new Date().toISOString(),
      endpoints: {
        base: '/api',
        auth: '/api/product-wholesale',
      },
    };
  }

  @Post()
  create() {
    return this.productWholesaleService.create();
  }


}
