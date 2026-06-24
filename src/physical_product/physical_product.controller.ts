import { Controller, Get } from '@nestjs/common';
import { PhysicalProductService } from './physical_product.service';

@Controller('physical-product')
export class PhysicalProductController {
  constructor(
    private readonly physicalProductService: PhysicalProductService,
  ) {}

  @Get()
  findAll() {
    return this.physicalProductService.findAll();
  }
}
