import { Module } from '@nestjs/common';
import { ProductBaseService } from './product-base.service';
import { ProductBaseController } from './product-base.controller';

@Module({
  controllers: [ProductBaseController],
  providers: [ProductBaseService],
})
export class ProductBaseModule {}
