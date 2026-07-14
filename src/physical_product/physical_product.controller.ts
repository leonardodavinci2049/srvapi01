import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

import { AuthGuard } from 'src/core/guards/auth.guard';

import { PhysicalProductService } from './physical_product.service';
import { OrderItemFindAllCustomerV2Dto } from './dto/order-item-find-all-customer-v2.dto';
import { PhysicalProductFindAllV2Dto } from './dto/physical-product-find-all-v2.dto';
import { PhysicalProductWarrantyIdCustomerV2Dto } from './dto/physical-product-warranty-id-customer-v2.dto';
import { PhysicalProductWarrantyIdV2Dto } from './dto/physical-product-warranty-id-v2.dto';
import { PhysicalProductWarrantyMovCustomerV2Dto } from './dto/physical-product-warranty-mov-customer-v2.dto';
import { PhysicalProductWarrantyMovV2Dto } from './dto/physical-product-warranty-mov-v2.dto';
import { OrderItemFindIdCustomerV2Dto } from './dto/order-item-find-id-customer-v2.dto';
import { PhysicalProductWarrantySearchV2Dto } from './dto/physical-product-warranty-search-v2.dto';

@Controller('physical-product')
export class PhysicalProductController {
  constructor(
    private readonly physicalProductService: PhysicalProductService,
  ) {}

  @Get()
  getHello() {
    return {
      name: 'Physical Product API',
      status: 'online',
      version: '1.0.1',
      documentation: '/',
      timestamp: new Date().toISOString(),
      endpoints: {
        base: '/api',
        auth: '/api/physical-product',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-item-find-all-customer')
  orderItemFindAllCustomerV2(
    @Body() dataJsonDto: OrderItemFindAllCustomerV2Dto,
  ) {
    return this.physicalProductService.taskOrderItemFindAllCustomerV2(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-item-find-id-customer')
  OrderItemFindIdCustomerV2(@Body() dataJsonDto: OrderItemFindIdCustomerV2Dto) {
    return this.physicalProductService.taskOrderItemFindIdCustomerV2(
      dataJsonDto,
    );
  }
  @UseGuards(AuthGuard)
  @Post('v2/physical-product-find-all')
  PhysicalProductFindAllV2(@Body() dataJsonDto: PhysicalProductFindAllV2Dto) {
    return this.physicalProductService.taskPhysicalProductFindAllV2(
      dataJsonDto,
    );
  }
  @UseGuards(AuthGuard)
  @Post('v2/physical-product-warranty-id-customer')
  PhysicalProductWarrantyIdCustomerV2(
    @Body() dataJsonDto: PhysicalProductWarrantyIdCustomerV2Dto,
  ) {
    return this.physicalProductService.taskPhysicalProductWarrantyIdCustomerV2(
      dataJsonDto,
    );
  }
  @UseGuards(AuthGuard)
  @Post('v2/physical-product-warranty-id')
  PhysicalProductWarrantyIdV2(
    @Body() dataJsonDto: PhysicalProductWarrantyIdV2Dto,
  ) {
    return this.physicalProductService.taskPhysicalProductWarrantyIdV2(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/physical-product-warranty-mov-customer')
  PhysicalProductWarrantyMovCustomerV2(
    @Body() dataJsonDto: PhysicalProductWarrantyMovCustomerV2Dto,
  ) {
    return this.physicalProductService.taskPhysicalProductWarrantyMovCustomerV2(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/physical-product-warranty-mov')
  PhysicalProductWarrantyMovV2(
    @Body() dataJsonDto: PhysicalProductWarrantyMovV2Dto,
  ) {
    return this.physicalProductService.taskPhysicalProductWarrantyMovV2(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/physical-product-warranty-search')
  PhysicalProductWarrantySearchV2(
    @Body() dataJsonDto: PhysicalProductWarrantySearchV2Dto,
  ) {
    return this.physicalProductService.taskPhysicalProductWarrantySearchV2(
      dataJsonDto,
    );
  }
}
