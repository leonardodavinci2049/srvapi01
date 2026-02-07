import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderOperationService {
  findAll() {
    return `This action returns all orderSales`;
  }
}
