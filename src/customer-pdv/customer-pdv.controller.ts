import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { CustomerPdvService } from './customer-pdv.service';
import { CustomerPdvFindAllV2Dto } from './dto/customer-pdv-find-all-v2.dto';
import { CustomerPdvFindIdDto } from './dto/customer-pdv-find-id.dto';
import { CustomerPdvSearchV2Dto } from './dto/customer-pdv-search-v2.dto';

@Controller('customer-pdv')
export class CustomerPdvController {
  constructor(private readonly service: CustomerPdvService) {}

  @Get()
  getHello() {
    return {
      name: 'Wholesale API',
      status: 'online',
      version: '1.0.1',
      documentation: '/',
      timestamp: new Date().toISOString(),
      endpoints: { base: '/api', auth: '/api/customer-pdv' },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-pdv-find-all')
  customerPdvFindAllV2(@Body() dataJsonDto: CustomerPdvFindAllV2Dto) {
    return this.service.taskCustomerPdvFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-pdv-find-id')
  customerPdvFindIdV2(@Body() dataJsonDto: CustomerPdvFindIdDto) {
    return this.service.taskCustomerPdvFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-pdv-search')
  customerPdvSearchV2(@Body() dataJsonDto: CustomerPdvSearchV2Dto) {
    return this.service.taskCustomerPdvSearchV2(dataJsonDto);
  }
}
