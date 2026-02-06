import { Injectable } from '@nestjs/common';
import { CreateOrderOperationDto } from './dto/create-order-operation.dto';
import { UpdateOrderOperationDto } from './dto/update-order-operation.dto';

@Injectable()
export class OrderOperationService {
  create(createOrderOperationDto: CreateOrderOperationDto) {
    return 'This action adds a new orderOperation';
  }

  findAll() {
    return `This action returns all orderOperation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderOperation`;
  }

  update(id: number, updateOrderOperationDto: UpdateOrderOperationDto) {
    return `This action updates a #${id} orderOperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderOperation`;
  }
}
