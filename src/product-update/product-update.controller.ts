import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ProductUpdateService } from './product-update.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { ProductUpdCharacteristicsV3Dto } from './dto/product-upd-characteristics-v3.dto';
import { ProductUpdFlagsV3Dto } from './dto/product-upd-flags-v3.dto';
import { ProductUpdGeneralV3Dto } from './dto/product-upd-general-v3.dto';
import { ProductUpdMetadataV3Dto } from './dto/product-upd-metadata-v3.dto';
import { ProductUpdPriceV3Dto } from './dto/product-upd-price-v3.dto';
import { ProductUpdTaxValuesV3Dto } from './dto/product-upd-tax-values-v3.dto';

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
  @Post('v3/product-upd-characteristics')
  productUpdCharacteristicsV3(
    @Body() dataJsonDto: ProductUpdCharacteristicsV3Dto,
  ) {
    return this.productUpdateService.taskProductUpdCharacteristicsV3(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-flags')
  productUpdFlagsV3(@Body() dataJsonDto: ProductUpdFlagsV3Dto) {
    return this.productUpdateService.taskProductUpdFlagsV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-general')
  productUpdGeneralV3(@Body() dataJsonDto: ProductUpdGeneralV3Dto) {
    return this.productUpdateService.taskProductUpdGeneralV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-metadata')
  productUpdMetadataV3(@Body() dataJsonDto: ProductUpdMetadataV3Dto) {
    return this.productUpdateService.taskProductUpdMetadataV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-price')
  productUpdPriceV3(@Body() dataJsonDto: ProductUpdPriceV3Dto) {
    return this.productUpdateService.taskProductUpdPriceV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-upd-tax-values')
  productUpdTaxValuesV3(@Body() dataJsonDto: ProductUpdTaxValuesV3Dto) {
    return this.productUpdateService.taskProductUpdTaxValuesV3(dataJsonDto);
  }
}
