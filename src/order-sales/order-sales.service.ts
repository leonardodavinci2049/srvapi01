import { Injectable } from '@nestjs/common';
import { CreateOrderSaleDto } from './dto/create-order-sale.dto';
import { UpdateOrderSaleDto } from './dto/update-order-sale.dto';

@Injectable()
export class OrderSalesService {
  create(createOrderSaleDto: CreateOrderSaleDto) {
    return 'This action adds a new orderSale';
  }

  findAll() {
    return `This action returns all orderSales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderSale`;
  }

  update(id: number, updateOrderSaleDto: UpdateOrderSaleDto) {
    return `This action updates a #${id} orderSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderSale`;
  }
}
