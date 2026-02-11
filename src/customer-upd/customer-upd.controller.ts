import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CustomerUpdService } from './customer-upd.service';

import { CustomerUpdAddressDto } from './dto/customer-upd-address.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { CustomerUpdBusinessDto } from './dto/customer-upd-business.dto';
import { CustomerUpdFlagDto } from './dto/customer-upd-flag.dto';
import { CustomerUpdGeneralDto } from './dto/customer-upd-general.dto';
import { CustomerUpdInternetDto } from './dto/customer-upd-internet.dto';
import { CustomerUpdPersonalDto } from './dto/customer-upd-personal.dto';

@Controller('customer-upd')
export class CustomerUpdController {
  constructor(private readonly customerUpdService: CustomerUpdService) {}

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-address')
  CustomerUpdAddressV2(@Body() dataJsonDto: CustomerUpdAddressDto) {
    return this.customerUpdService.TaskCustomerUpdAddress(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-business')
  CustomerUpdBusinessV2(@Body() dataJsonDto: CustomerUpdBusinessDto) {
    return this.customerUpdService.TaskCustomerUpdBusiness(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-flag')
  CustomerUpdFlagV2(@Body() dataJsonDto: CustomerUpdFlagDto) {
    return this.customerUpdService.TaskCustomerUpdFlag(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-general')
  CustomerUpdGeneralV2(@Body() dataJsonDto: CustomerUpdGeneralDto) {
    return this.customerUpdService.TaskCustomerUpdGeneral(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-internet')
  CustomerUpdInternetV2(@Body() dataJsonDto: CustomerUpdInternetDto) {
    return this.customerUpdService.TaskCustomerUpdInternet(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-personal')
  CustomerUpdPersonalV2(@Body() dataJsonDto: CustomerUpdPersonalDto) {
    return this.customerUpdService.TaskCustomerUpdPersonal(dataJsonDto);
  }
}
