import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderB2bService } from './order-b2b.service';


@Controller('order-b2b')
export class OrderB2bController {
  constructor(private readonly orderB2bService: OrderB2bService) {}


  @Get()
  findAll() {
    return this.orderB2bService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderB2bService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderB2bService.remove(+id);
  }
}
