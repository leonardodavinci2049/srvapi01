import { Injectable } from '@nestjs/common';
import { CreateProductWebDto } from './dto/create-product-web.dto';
import { UpdateProductWebDto } from './dto/update-product-web.dto';

@Injectable()
export class ProductWebService {
  create(createProductWebDto: CreateProductWebDto) {
    return 'This action adds a new productWeb';
  }

  findAll() {
    return `This action returns all productWeb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productWeb`;
  }

  update(id: number, updateProductWebDto: UpdateProductWebDto) {
    return `This action updates a #${id} productWeb`;
  }

  remove(id: number) {
    return `This action removes a #${id} productWeb`;
  }
}
