import { Controller, Post, Body } from '@nestjs/common';
import { CarrierService } from './carrier.service';

@Controller('carrier')
export class CarrierController {
  constructor(private readonly carrierService: CarrierService) {}

  @Post()
  create() {
    return this.carrierService.create();
  }
}
