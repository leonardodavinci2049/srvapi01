import { Injectable } from '@nestjs/common';
import { CreateProductWholesaleDto } from './dto/create-product-wholesale.dto';
import { UpdateProductWholesaleDto } from './dto/update-product-wholesale.dto';

@Injectable()
export class ProductWholesaleService {
  create(createProductWholesaleDto: CreateProductWholesaleDto) {
    return 'This action adds a new productWholesale';
  }

  findAll() {
    return `This action returns all productWholesale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productWholesale`;
  }

  update(id: number, updateProductWholesaleDto: UpdateProductWholesaleDto) {
    return `This action updates a #${id} productWholesale`;
  }

  remove(id: number) {
    return `This action removes a #${id} productWholesale`;
  }
}
