import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderUpdService } from './order-upd.service';
import { CreateOrderUpdDto } from './dto/create-order-upd.dto';
import { UpdateOrderUpdDto } from './dto/update-order-upd.dto';

@Controller('order-upd')
export class OrderUpdController {
  constructor(private readonly orderUpdService: OrderUpdService) {}

  @Post()
  create(@Body() createOrderUpdDto: CreateOrderUpdDto) {
    return this.orderUpdService.create(createOrderUpdDto);
  }

  @Get()
  findAll() {
    return this.orderUpdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderUpdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderUpdDto: UpdateOrderUpdDto) {
    return this.orderUpdService.update(+id, updateOrderUpdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderUpdService.remove(+id);
  }
}
