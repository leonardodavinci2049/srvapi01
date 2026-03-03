import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ProductUpdateService } from './product-update.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('product-update')
export class ProductUpdateController {
  constructor(private readonly productUpdateService: ProductUpdateService) {}

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
        auth: '/api/product-update',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-create')
  create() {
    return this.productUpdateService.create();
  }
}
