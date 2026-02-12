import { Controller, Post, Body } from '@nestjs/common';
import { ProductPdvService } from './product-pdv.service';

@Controller('product-pdv')
export class ProductPdvController {
  constructor(private readonly productPdvService: ProductPdvService) {}

  @Post()
  create() {
    return this.productPdvService.create();
  }
}
