import { Module } from '@nestjs/common';
import { ProductPdvService } from './product-pdv.service';
import { ProductPdvController } from './product-pdv.controller';

@Module({
  controllers: [ProductPdvController],
  providers: [ProductPdvService],
})
export class ProductPdvModule {}
