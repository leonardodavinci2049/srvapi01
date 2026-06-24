import { Module } from '@nestjs/common';
import { PhysicalProductService } from './physical_product.service';
import { PhysicalProductController } from './physical_product.controller';

@Module({
  controllers: [PhysicalProductController],
  providers: [PhysicalProductService],
})
export class PhysicalProductModule {}
