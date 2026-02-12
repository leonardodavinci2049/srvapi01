import { Controller, Post, Body } from '@nestjs/common';
import { ProductWebService } from './product-web.service';

@Controller('product-web')
export class ProductWebController {
  constructor(private readonly productWebService: ProductWebService) {}

  @Post()
  create() {
    return this.productWebService.create();
  }
}
