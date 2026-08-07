import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { CustomerService } from './customer.service';
import { CostumerCreateDto } from './dto/costumer-create.dto';
import { CostumerFindAllDto } from './dto/costumer-find-all.dto';
import { CostumerFindIdDto } from './dto/costumer-find-id.dto';
import { CostumerFindManagerAllV2Dto } from './dto/costumer-find-manager-all-v2.dto';
import { CostumerFindManagerIdDto } from './dto/costumer-find-manager-id.dto';
import { CostumerFindPdvIdDto } from './dto/costumer-find-pdv-id.dto';
import { CustomerFindLatestProductsDto } from './dto/customer-find-latest-products.dto';
import { CustomerFindSearchV2Dto } from './dto/customer-find-search-v2.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
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
        auth: '/api/customer',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-create')
  CustomerCreateV2(@Body() dataJsonDto: CostumerCreateDto) {
    return this.customerService.taskCustomerCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-find-all')
  CustomerFindAllV2(@Body() dataJsonDto: CostumerFindAllDto) {
    return this.customerService.taskCustomerFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-search-all')
  customerSearchAllV2(@Body() dataJsonDto: CustomerFindSearchV2Dto) {
    return this.customerService.taskCustomerSearchAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-find-manager-all')
  CustomerFindManagerAllV2(@Body() dataJsonDto: CostumerFindManagerAllV2Dto) {
    return this.customerService.taskCustomerFindManagerAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-find-manager-id')
  CustomerFindManagerIdV2(@Body() dataJsonDto: CostumerFindManagerIdDto) {
    return this.customerService.taskCustomerFindManagerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-find-pdv-id')
  CustomerFindPdvIdV2(@Body() dataJsonDto: CostumerFindPdvIdDto) {
    return this.customerService.taskCustomerFindPdvIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-find-by-id')
  CustomerFindByIdV2(@Body() dataJsonDto: CostumerFindIdDto) {
    return this.customerService.taskCustomerFindByIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-find-latest-products')
  CustomerLatestproductsFindAllV2(
    @Body() dataJsonDto: CustomerFindLatestProductsDto,
  ) {
    return this.customerService.taskCustomerLatestproductsFindAllV2(
      dataJsonDto,
    );
  }
}
