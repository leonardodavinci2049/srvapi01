import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { BrandService } from './brand.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { BrandFindAllDto } from './dto/brand-find-all.dto';

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
  @Post('v2/brand-find-all')
  brandFindAllV2(@Body() dataJsonDto: BrandFindAllDto) {
    return this.brandService.tskBrandFindV2(dataJsonDto);
  }
}
