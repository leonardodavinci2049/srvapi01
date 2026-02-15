import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

import { SupplierCreateV2Dto } from './dto/supplier-create-v2.dto';
import { SupplierRelCreateV2Dto } from './dto/supplier-rel-create-v2.dto';
import { SupplierFindAllV2Dto } from './dto/supplier-find-all-v2.dto';
import { SupplierRelFindProdAllV2Dto } from './dto/supplier-rel-find-prod-all-v2.dto';
import { SupplierFindIdV2Dto } from './dto/supplier-find-id-v2.dto';

import { SupplierUpdateV2Dto } from './dto/supplier-update-v2.dto';
import { SupplierRelDeleteV2Dto } from './dto/supplier-rel-delete-v2.dto';
import { SupplierDeleteV2Dto } from './dto/supplier-delete-v2.dto';

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
  @Post('v2/supplier-create')
  supplierCreateV2(@Body() dataJsonDto: SupplierCreateV2Dto) {
    return this.supplierService.taskSupplierCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/supplier-rel-create')
  taskSupplierRelCreateV2(@Body() dataJsonDto: SupplierRelCreateV2Dto) {
    return this.supplierService.taskSupplierRelCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/supplier-find-all')
  supplierFindAllV2(@Body() dataJsonDto: SupplierFindAllV2Dto) {
    return this.supplierService.taskSupplierFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/supplier-rel-find-prod-all')
  taskSupplierRelFindProdAllV2(
    @Body() dataJsonDto: SupplierRelFindProdAllV2Dto,
  ) {
    return this.supplierService.taskSupplierRelFindProdAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/supplier-find-id')
  supplierFindIdV2(@Body() dataJsonDto: SupplierFindIdV2Dto) {
    return this.supplierService.taskSupplierFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/supplier-update')
  supplierUpdateV2(@Body() dataJsonDto: SupplierUpdateV2Dto) {
    return this.supplierService.taskSupplierUpdateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/supplier-rel-delete')
  taskSupplierRelDeleteV2(@Body() dataJsonDto: SupplierRelDeleteV2Dto) {
    return this.supplierService.taskSupplierRelDeleteV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/supplier-delete')
  taskSupplierDeleteV2(@Body() dataJsonDto: SupplierDeleteV2Dto) {
    return this.supplierService.taskSupplierDeleteV2(dataJsonDto);
  }
}
