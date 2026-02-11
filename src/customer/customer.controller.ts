import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { CostumerCreateDto } from './dto/costumer-create.dto';
import { CostumerFindAllDto } from './dto/costumer-find-all.dto';
import { CostumerFindIdDto } from './dto/costumer-find-id.dto';
import { CustomerFindLatestProductsDto } from './dto/customer-find-latest-products.dto';

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
