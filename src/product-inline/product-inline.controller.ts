import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductInlineService } from './product-inline.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('product-inline')
export class ProductInlineController {
  constructor(private readonly productInlineService: ProductInlineService) {}
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
        auth: '/api/product-inline',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-inline-create')
  create() {
    return this.productInlineService.create();
  }
}
