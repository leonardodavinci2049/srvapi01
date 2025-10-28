import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

import { SupplierFindAllDto } from './dto/supplier-find-all.dto';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

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
        auth: '/api/supplier',
      },
    };
  }
  @UseGuards(AuthGuard)
  @Post('v2/supplier-find-all')
  supplierFindAllV2(@Body() dataJsonDto: SupplierFindAllDto) {
    return this.supplierService.tskBrandFindV2(dataJsonDto);
  }
}
