import { Injectable } from '@nestjs/common';
import { CreateOrderUpdDto } from './dto/create-order-upd.dto';
import { UpdateOrderUpdDto } from './dto/update-order-upd.dto';

@Injectable()
export class OrderUpdService {
  create(createOrderUpdDto: CreateOrderUpdDto) {
    return 'This action adds a new orderUpd';
  }

  findAll() {
    return `This action returns all orderUpd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderUpd`;
  }

  update(id: number, updateOrderUpdDto: UpdateOrderUpdDto) {
    return `This action updates a #${id} orderUpd`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderUpd`;
  }
}
