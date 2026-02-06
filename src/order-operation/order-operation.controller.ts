import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderOperationService } from './order-operation.service';
import { CreateOrderOperationDto } from './dto/create-order-operation.dto';
import { UpdateOrderOperationDto } from './dto/update-order-operation.dto';

@Controller('order-operation')
export class OrderOperationController {
  constructor(private readonly orderOperationService: OrderOperationService) {}

  @Post()
  create(@Body() createOrderOperationDto: CreateOrderOperationDto) {
    return this.orderOperationService.create(createOrderOperationDto);
  }

  @Get()
  findAll() {
    return this.orderOperationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderOperationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderOperationDto: UpdateOrderOperationDto) {
    return this.orderOperationService.update(+id, updateOrderOperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderOperationService.remove(+id);
  }
}
