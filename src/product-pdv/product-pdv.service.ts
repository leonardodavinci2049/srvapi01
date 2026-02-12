import { Injectable } from '@nestjs/common';
import { CreateProductPdvDto } from './dto/create-product-pdv.dto';
import { UpdateProductPdvDto } from './dto/update-product-pdv.dto';

@Injectable()
export class ProductPdvService {
  create(createProductPdvDto: CreateProductPdvDto) {
    return 'This action adds a new productPdv';
  }

  findAll() {
    return `This action returns all productPdv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productPdv`;
  }

  update(id: number, updateProductPdvDto: UpdateProductPdvDto) {
    return `This action updates a #${id} productPdv`;
  }

  remove(id: number) {
    return `This action removes a #${id} productPdv`;
  }
}
