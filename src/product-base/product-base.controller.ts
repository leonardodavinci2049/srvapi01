import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductBaseService } from './product-base.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('product-base')
export class ProductBaseController {
  constructor(private readonly productBaseService: ProductBaseService) {}

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
        auth: '/api/product-base',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-create')
  create() {
    return this.productBaseService.create();
  }
}
