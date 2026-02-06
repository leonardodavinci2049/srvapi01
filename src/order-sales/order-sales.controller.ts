import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderSalesService } from './order-sales.service';
import { CreateOrderSaleDto } from './dto/create-order-sale.dto';
import { UpdateOrderSaleDto } from './dto/update-order-sale.dto';

@Controller('order-sales')
export class OrderSalesController {
  constructor(private readonly orderSalesService: OrderSalesService) {}

  @Post()
  create(@Body() createOrderSaleDto: CreateOrderSaleDto) {
    return this.orderSalesService.create(createOrderSaleDto);
  }

  @Get()
  findAll() {
    return this.orderSalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderSalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderSaleDto: UpdateOrderSaleDto) {
    return this.orderSalesService.update(+id, updateOrderSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderSalesService.remove(+id);
  }
}
