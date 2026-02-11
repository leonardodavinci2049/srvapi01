import { Controller, Post, Body } from '@nestjs/common';
import { CustomerInlineService } from './customer-inline.service';

@Controller('customer-inline')
export class CustomerInlineController {
  constructor(private readonly customerInlineService: CustomerInlineService) {}

  @Post()
  create() {
    return this.customerInlineService.create();
  }
}
