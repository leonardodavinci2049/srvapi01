import { Injectable } from '@nestjs/common';
import { CreateCustomerInlineDto } from './dto/create-customer-inline.dto';
import { UpdateCustomerInlineDto } from './dto/update-customer-inline.dto';

@Injectable()
export class CustomerInlineService {
  create(createCustomerInlineDto: CreateCustomerInlineDto) {
    return 'This action adds a new customerInline';
  }

  findAll() {
    return `This action returns all customerInline`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerInline`;
  }

  update(id: number, updateCustomerInlineDto: UpdateCustomerInlineDto) {
    return `This action updates a #${id} customerInline`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerInline`;
  }
}
