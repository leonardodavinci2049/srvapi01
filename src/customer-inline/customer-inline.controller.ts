import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerInlineService } from './customer-inline.service';
import { CreateCustomerInlineDto } from './dto/create-customer-inline.dto';
import { UpdateCustomerInlineDto } from './dto/update-customer-inline.dto';

@Controller('customer-inline')
export class CustomerInlineController {
  constructor(private readonly customerInlineService: CustomerInlineService) {}

  @Post()
  create(@Body() createCustomerInlineDto: CreateCustomerInlineDto) {
    return this.customerInlineService.create(createCustomerInlineDto);
  }

  @Get()
  findAll() {
    return this.customerInlineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerInlineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerInlineDto: UpdateCustomerInlineDto) {
    return this.customerInlineService.update(+id, updateCustomerInlineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerInlineService.remove(+id);
  }
}
