import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerUpdService } from './customer-upd.service';
import { CreateCustomerUpdDto } from './dto/create-customer-upd.dto';
import { UpdateCustomerUpdDto } from './dto/update-customer-upd.dto';

@Controller('customer-upd')
export class CustomerUpdController {
  constructor(private readonly customerUpdService: CustomerUpdService) {}

  @Post()
  create(@Body() createCustomerUpdDto: CreateCustomerUpdDto) {
    return this.customerUpdService.create(createCustomerUpdDto);
  }

  @Get()
  findAll() {
    return this.customerUpdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerUpdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerUpdDto: UpdateCustomerUpdDto) {
    return this.customerUpdService.update(+id, updateCustomerUpdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerUpdService.remove(+id);
  }
}
