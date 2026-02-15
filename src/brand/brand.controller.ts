import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';

import { BrandService } from './brand.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

import { BrandCreateV2Dto } from './dto/brand-create-v2.dto';
import { BrandFindAllV2Dto } from './dto/brand-find-all-v2.dto';
import { BrandFindIdV2Dto } from './dto/brand-find-id-v2.dto';
import { BrandUpdateV2Dto } from './dto/brand-update-v2.dto';
import { BrandDeleteV2Dto } from './dto/brand-delete-v2.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

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
        auth: '/api/brand',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/brand-create')
  brandCreateV2(@Body() dataJsonDto: BrandCreateV2Dto) {
    return this.brandService.taskBrandCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/brand-find-all')
  brandFindAllV2(@Body() dataJsonDto: BrandFindAllV2Dto) {
    return this.brandService.taskBrandFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/brand-find-id')
  brandFindIdV2(@Body() dataJsonDto: BrandFindIdV2Dto) {
    return this.brandService.taskBrandFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/brand-update')
  brandUpdateV2(@Body() dataJsonDto: BrandUpdateV2Dto) {
    return this.brandService.taskBrandUpdateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/brand-delete')
  brandDeleteV2(@Body() dataJsonDto: BrandDeleteV2Dto) {
    return this.brandService.taskBrandDeleteV2(dataJsonDto);
  }
}
