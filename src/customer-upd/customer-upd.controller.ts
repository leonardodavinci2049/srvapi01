import { Controller, Post, Body } from '@nestjs/common';
import { CustomerUpdService } from './customer-upd.service';
import { CreateCustomerUpdDto } from './dto/create-customer-upd.dto';

@Controller('customer-upd')
export class CustomerUpdController {
  constructor(private readonly customerUpdService: CustomerUpdService) {}

  @Post()
  create(@Body() createCustomerUpdDto: CreateCustomerUpdDto) {
    return this.customerUpdService.create(createCustomerUpdDto);
  }
}
