import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ProductService } from './product.service';

import { AuthGuard } from 'src/core/guards/auth.guard';

import { ProductFindIdDto } from './dto/product-find_id.dto';
import { ProductCreateDto } from './dto/product-create.dto';
import { ProductFindDto } from './dto/product-find.dto';
import { ProductWebFindIdDto } from './dto/product-web-find-id.dto';
import { ProductWebFindDto } from './dto/product-web-find.dto';
import { ProductPdvFindDto } from './dto/product-pdv-find.dto';
import { ProductUpdGeneralDto } from './dto/product-upd-general.dto';
import { ProductUpdNameDto } from './dto/product-upd-name.dto';
import { ProductUpdStockDto } from './dto/product-upd-stock.dto';
import { ProductUpdPriceDto } from './dto/product-upd-price.dto';
import { ProductFlagsDto } from './dto/product-upd-flags.dto';
import { ProductUpdCaracteristicsDto } from './dto/product-upd-caracteristics.dto';
import { ProductUpdTaxValuesDto } from './dto/product-upd_tax-values.dto';
import { ProductUpdShortDescriptionDto } from './dto/product-upd-Short-description.dto';
import { ProductUpdDescriptionDto } from './dto/product-upd-description.dto';
import { ProductUpdVariouDto } from './dto/product-upd-variou.dto';
import { ProductUpdTypeDto } from './dto/product-upd-type.dto';
import { ProductUpdBrandDto } from './dto/product-upd-brand.dto';
import { ProductUpdPathImageDto } from './dto/product-upd-path-image.dto';

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
  @Post('v2/product-create')
  createProduct(@Body() dataJsonDto: ProductCreateDto) {
    return this.productService.tskProductCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-find-id')
  findProduct(@Body() dataJsonDto: ProductFindIdDto) {
    return this.productService.tskProductFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-find')
  findProductId(@Body() dataJsonDto: ProductFindDto) {
    return this.productService.tskProductFindV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-find-web-id')
  findProductWebId(@Body() dataJsonDto: ProductWebFindIdDto) {
    return this.productService.tskProductWebFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-web-find')
  findProductWeb(@Body() dataJsonDto: ProductWebFindDto) {
    return this.productService.tskProductWebFindV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-pdv-find')
  findProductPdv(@Body() dataJsonDto: ProductPdvFindDto) {
    return this.productService.tskProductPdvFindV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-upd-general')
  productUpdGeneralV2(@Body() dataJsonDto: ProductUpdGeneralDto) {
    return this.productService.tskProductUpdGeneralV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/product-upd-name')
  productUpdNameV2(@Body() dataJsonDto: ProductUpdNameDto) {
    return this.productService.tskProductUpdNameV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-upd-path-image')
  productUpdPathImageV2(@Body() dataJsonDto: ProductUpdPathImageDto) {
    return this.productService.tskProductUpdPathImageV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-upd-type')
  productUpdTypeV2(@Body() dataJsonDto: ProductUpdTypeDto) {
    return this.productService.tskProductUpdTypeV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-upd-brand')
  productUpdBrandV2(@Body() dataJsonDto: ProductUpdBrandDto) {
    return this.productService.tskProductUpdBrandV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/product-upd-stock')
  productUpdStockV2(@Body() dataJsonDto: ProductUpdStockDto) {
    return this.productService.tskProductUpdStockV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/product-upd-price')
  productUpdPriceV2(@Body() dataJsonDto: ProductUpdPriceDto) {
    return this.productService.tskProductUpdPriceV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/product-upd-flags')
  productUpdFlagsV2(@Body() dataJsonDto: ProductFlagsDto) {
    return this.productService.tskProductUpdFlagsV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/product-upd-caracteristics')
  productUpdCaracteristicsV2(@Body() dataJsonDto: ProductUpdCaracteristicsDto) {
    return this.productService.tskProductUpdCaracteristicsV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/product-upd-tax-values')
  productUpdTaxValuesV2(@Body() dataJsonDto: ProductUpdTaxValuesDto) {
    return this.productService.tskProductUpdTaxValuesV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-upd-short-description')
  productUpdShortDescriptionV2(
    @Body() dataJsonDto: ProductUpdShortDescriptionDto,
  ) {
    return this.productService.tskProductUpdShortDescriptionV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-upd-description')
  productUpdDescriptionV2(@Body() dataJsonDto: ProductUpdDescriptionDto) {
    return this.productService.tskProductUpdDescriptionV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/product-upd-variou')
  productUpdVariouV2(@Body() dataJsonDto: ProductUpdVariouDto) {
    return this.productService.tskProductUpdVariouV2(dataJsonDto);
  }
}
