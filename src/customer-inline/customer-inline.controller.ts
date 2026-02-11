import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { CustomerInlineService } from './customer-inline.service';
import { CustomerUpdInlEmailDto } from './dto/customer-upd-inl-email.dto';
import { CustomerUpdInlNameDto } from './dto/customer-upd-inl-name.dto';
import { CustomerUpdInlNotesDto } from './dto/customer-upd-inl-notes.dto';
import { CustomerUpdInlPhoneDto } from './dto/customer-upd-inl-phone.dto';

import { CustomerUpdInlSellerIdDto } from './dto/customer-upd-inl-seller-id.dto';
import { CustomerUpdInlTypeCustomerDto } from './dto/customer-upd-inl-type-customer.dto';
import { CustomerUpdInlTypePersonDto } from './dto/customer-upd-inl-type-person.dto';
import { CustomerUpdInlWhatsappDto } from './dto/customer-upd-inl-whatsapp.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('customer-inline')
export class CustomerInlineController {
  constructor(private readonly customerInlineService: CustomerInlineService) {}

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
        auth: '/api/customer-inline',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-inline-email')
  CustomerUpdInlEmailV2(@Body() dataJsonDto: CustomerUpdInlEmailDto) {
    return this.customerInlineService.TaskCustomerUpdInlEmail(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-inline-name')
  CustomerUpdInlNameV2(@Body() dataJsonDto: CustomerUpdInlNameDto) {
    return this.customerInlineService.TaskCustomerUpdInlName(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-inline-notes')
  CustomerUpdInlNotesV2(@Body() dataJsonDto: CustomerUpdInlNotesDto) {
    return this.customerInlineService.TaskCustomerUpdInlNotes(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-inline-phone')
  CustomerUpdInlPhoneV2(@Body() dataJsonDto: CustomerUpdInlPhoneDto) {
    return this.customerInlineService.TaskCustomerUpdInlPhone(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-inline-seller-id')
  CustomerUpdInlSellerIdV2(@Body() dataJsonDto: CustomerUpdInlSellerIdDto) {
    return this.customerInlineService.TaskCustomerUpdInlSellerId(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-inline-type-customer')
  CustomerUpdInlTypeCustomerV2(
    @Body() dataJsonDto: CustomerUpdInlTypeCustomerDto,
  ) {
    return this.customerInlineService.TaskCustomerUpdInlTypeCustomer(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-inline-type-person')
  CustomerUpdInlTypePersonV2(@Body() dataJsonDto: CustomerUpdInlTypePersonDto) {
    return this.customerInlineService.TaskCustomerUpdInlTypePerson(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/customer-upd-inline-whatsapp')
  CustomerUpdInlWhatsappV2(@Body() dataJsonDto: CustomerUpdInlWhatsappDto) {
    return this.customerInlineService.TaskCustomerUpdInlWhatsapp(dataJsonDto);
  }
}
