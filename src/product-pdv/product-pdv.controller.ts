import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ProductPdvService } from './product-pdv.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { ProductFindPdvAllV2Dto } from './dto/product-find-pdv-all-v2.dto';
import { ProductFindPdvIdV2Dto } from './dto/product-find-pdv-id-v2.dto';

@Controller('product-pdv')
export class ProductPdvController {
  constructor(private readonly productPdvService: ProductPdvService) {}

  @Post()
  create() {
    return this.productPdvService.create();
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-pdv-find-all')
  productFindPdvAllV2(@Body() dataJsonDto: ProductFindPdvAllV2Dto) {
    return this.productPdvService.taskProductFindPdvAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-pdv-find-id')
  productFindPdvIdV2(@Body() dataJsonDto: ProductFindPdvIdV2Dto) {
    return this.productPdvService.taskProductFindPdvIdV2(dataJsonDto);
  }
}
