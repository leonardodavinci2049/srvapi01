import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderB2bService } from './order-b2b.service';
import { CreateOrderB2bDto } from './dto/create-order-b2b.dto';
import { UpdateOrderB2bDto } from './dto/update-order-b2b.dto';

@Controller('order-b2b')
export class OrderB2bController {
  constructor(private readonly orderB2bService: OrderB2bService) {}

  @Post()
  create(@Body() createOrderB2bDto: CreateOrderB2bDto) {
    return this.orderB2bService.create(createOrderB2bDto);
  }

  @Get()
  findAll() {
    return this.orderB2bService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderB2bService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderB2bDto: UpdateOrderB2bDto) {
    return this.orderB2bService.update(+id, updateOrderB2bDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderB2bService.remove(+id);
  }
}
