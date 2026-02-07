import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderSalesService {
  findAll() {
    return `This action returns all orderSales`;
  }
}
