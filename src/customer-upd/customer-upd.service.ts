import { Injectable } from '@nestjs/common';
import { CreateCustomerUpdDto } from './dto/create-customer-upd.dto';
import { UpdateCustomerUpdDto } from './dto/update-customer-upd.dto';

@Injectable()
export class CustomerUpdService {
  create(createCustomerUpdDto: CreateCustomerUpdDto) {
    return 'This action adds a new customerUpd';
  }

  findAll() {
    return `This action returns all customerUpd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerUpd`;
  }

  update(id: number, updateCustomerUpdDto: UpdateCustomerUpdDto) {
    return `This action updates a #${id} customerUpd`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerUpd`;
  }
}
