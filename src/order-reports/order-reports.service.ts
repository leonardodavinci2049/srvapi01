import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderReportsService {
  findAll() {
    return `This action returns all orderSales`;
  }
}
