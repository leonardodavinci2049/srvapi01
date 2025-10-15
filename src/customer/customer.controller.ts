import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create() {
    return this.customerService.create();
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.customerService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
