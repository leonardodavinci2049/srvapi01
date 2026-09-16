import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { ProductWholesaleFindAllV2Dto } from './dto/product-wholesale-find-all-v2.dto';
import { ProductWholesaleFindIdV2Dto } from './dto/product-wholesale-find-id-v2.dto';
import { ProductWholesaleSectionsV2Dto } from './dto/product-wholesale-sections-v2.dto';
import { ProductWholesaleTaxonomyFindMenuV2Dto } from './dto/product-wholesale-taxonomy-find-menu-v2.dto';
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

  @UseGuards(AuthGuard)
  @Post('v2/product-wholesale-find-all')
  productWholesaleFindAllV2(@Body() dataJsonDto: ProductWholesaleFindAllV2Dto) {
    return this.productWholesaleService.tskProductWholesaleFindAllV2(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-wholesale-find-id')
  productWholesaleFindIdV2(@Body() dataJsonDto: ProductWholesaleFindIdV2Dto) {
    return this.productWholesaleService.tskProductWholesaleFindIdV2(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-wholesale-sections')
  productWholesaleSectionsV2(
    @Body() dataJsonDto: ProductWholesaleSectionsV2Dto,
  ) {
    return this.productWholesaleService.tskProductWholesaleSectionsV2(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-wholesale-taxonomy-find-menu')
  productWholesaleTaxonomyFindMenuV2(
    @Body() dataJsonDto: ProductWholesaleTaxonomyFindMenuV2Dto,
  ) {
    return this.productWholesaleService.tskProductWholesaleTaxonomyFindMenuV2(
      dataJsonDto,
    );
  }
}
