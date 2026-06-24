import { Injectable } from '@nestjs/common';

@Injectable()
export class PhysicalProductService {
  findAll() {
    return `This action returns all physicalProduct`;
  }
}
