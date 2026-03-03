import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductInlineService } from './product-inline.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { ProductUpdInlDescriptionV3Dto } from './dto/product-upd-inl-description-v3.dto';
import { ProductUpdInlBrandV3Dto } from './dto/product-upd-inl-brand-v3.dto';
import { ProductUpdInlNameV3Dto } from './dto/product-upd-inl-name-v3.dto';
import { ProductUpdInlPathImageV3Dto } from './dto/product-upd-inl-path-image-v3.dto';
import { ProductUpdInlShortDescriptionV3Dto } from './dto/product-upd-inl-Short-description-v3.dto';
import { ProductUpdInlStockMinV3Dto } from './dto/product-upd-inl-stock-min-v3.dto';
import { ProductUpdInlStockV3Dto } from './dto/product-upd-inl-stock-v3.dto';
import { ProductUpdInlTypeV3Dto } from './dto/product-upd-inl-type-v3.dto';
import { ProductUpdInlVariouV3Dto } from './dto/product-upd-inl-variou-v3.dto';

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
  @Post('v3/product-upd-inl-brand')
  productUpdInlBrandV3(@Body() dataJsonDto: ProductUpdInlBrandV3Dto) {
    return this.productInlineService.taskProductUpdInlBrandV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-inl-description')
  productUpdInlDescriptionV3(
    @Body() dataJsonDto: ProductUpdInlDescriptionV3Dto,
  ) {
    return this.productInlineService.taskProductUpdInlDescriptionV3(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-inl-name')
  productUpdInlNameV3(@Body() dataJsonDto: ProductUpdInlNameV3Dto) {
    return this.productInlineService.taskProductUpdInlNameV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-inl-path-image')
  productUpdInlPathImageV3(@Body() dataJsonDto: ProductUpdInlPathImageV3Dto) {
    return this.productInlineService.taskProductUpdInlPathImageV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-inl-short-description')
  productUpdInlShortDescriptionV3(
    @Body() dataJsonDto: ProductUpdInlShortDescriptionV3Dto,
  ) {
    return this.productInlineService.taskProductUpdInlShortDescriptionV3(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-inl-stock-min')
  productUpdInlStockMinV3(@Body() dataJsonDto: ProductUpdInlStockMinV3Dto) {
    return this.productInlineService.taskProductUpdInlStockMinV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-inl-stock')
  productUpdInlStockV3(@Body() dataJsonDto: ProductUpdInlStockV3Dto) {
    return this.productInlineService.taskProductUpdInlStockV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-inl-type')
  productUpdInlTypeV3(@Body() dataJsonDto: ProductUpdInlTypeV3Dto) {
    return this.productInlineService.taskProductUpdInlTypeV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-inl-variou')
  productUpdInlVariouV3(@Body() dataJsonDto: ProductUpdInlVariouV3Dto) {
    return this.productInlineService.taskProductUpdInlVariouV3(dataJsonDto);
  }
}
