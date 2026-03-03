import { Module } from '@nestjs/common';
import { ProductInlineService } from './product-inline.service';
import { ProductInlineController } from './product-inline.controller';

@Module({
  controllers: [ProductInlineController],
  providers: [ProductInlineService],
})
export class ProductInlineModule {}
