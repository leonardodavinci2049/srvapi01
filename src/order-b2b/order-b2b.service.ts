import { Injectable } from '@nestjs/common';
import { CreateOrderB2bDto } from './dto/create-order-b2b.dto';
import { UpdateOrderB2bDto } from './dto/update-order-b2b.dto';

@Injectable()
export class OrderB2bService {
  create(createOrderB2bDto: CreateOrderB2bDto) {
    return 'This action adds a new orderB2b';
  }

  findAll() {
    return `This action returns all orderB2b`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderB2b`;
  }

  update(id: number, updateOrderB2bDto: UpdateOrderB2bDto) {
    return `This action updates a #${id} orderB2b`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderB2b`;
  }
}
