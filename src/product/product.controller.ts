import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Get,
} from '@nestjs/common';
import { ProductService } from './product.service';

import { FindProductDto } from './dto/find-product.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { FindProductIdDto } from './dto/id-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

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
        auth: '/api/product',
      },
    };
  }
  // https://wserpapp01.comsuporte.com.br/api/product
  @Post()
  create() {
    return this.productService.create();
  }

  @UseGuards(AuthGuard)
  @Post('v1/find-product')
  findProduct(@Body() dataJsonDto: FindProductDto) {
    return this.productService.findProduct(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/find-product-id')
  findProductId(@Body() dataJsonDto: FindProductIdDto) {
    return this.productService.findProductId(dataJsonDto);
  }

  @Patch(':id')
  update() {
    return this.productService.update();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
