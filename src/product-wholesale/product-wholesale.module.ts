import { Module } from '@nestjs/common';
import { ProductWholesaleService } from './product-wholesale.service';
import { ProductWholesaleController } from './product-wholesale.controller';

@Module({
  controllers: [ProductWholesaleController],
  providers: [ProductWholesaleService],
})
export class ProductWholesaleModule {}
