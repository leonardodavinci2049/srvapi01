import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductBaseService } from './product-base.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { ProductCreateV3Dto } from './dto/product-create-v3.dto';
import { ProductFindAllV3Dto } from './dto/product-find-all-v3.dto';
import { ProductFindIdV3Dto } from './dto/product-find-id-v3.dto';
import { ProductFindSearchAllV3Dto } from './dto/product-find-search-all-v3.dto';

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
  productCreateV3(@Body() dataJsonDto: ProductCreateV3Dto) {
    return this.productBaseService.taskProductCreateV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-find-all')
  productFindAllV3(@Body() dataJsonDto: ProductFindAllV3Dto) {
    return this.productBaseService.taskProductFindAllV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-search-all')
  productSearchAllV3(@Body() dataJsonDto: ProductFindSearchAllV3Dto) {
    return this.productBaseService.taskProductSearchAllV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-find-id')
  productFindIdV3(@Body() dataJsonDto: ProductFindIdV3Dto) {
    return this.productBaseService.taskProductFindIdV3(dataJsonDto);
  }
}
