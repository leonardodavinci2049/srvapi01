import { Injectable } from '@nestjs/common';
import { CreatePhysicalProductDto } from './dto/create-physical_product.dto';
import { UpdatePhysicalProductDto } from './dto/update-physical_product.dto';

@Injectable()
export class PhysicalProductService {
  create(createPhysicalProductDto: CreatePhysicalProductDto) {
    return 'This action adds a new physicalProduct';
  }

  findAll() {
    return `This action returns all physicalProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} physicalProduct`;
  }

  update(id: number, updatePhysicalProductDto: UpdatePhysicalProductDto) {
    return `This action updates a #${id} physicalProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} physicalProduct`;
  }
}
