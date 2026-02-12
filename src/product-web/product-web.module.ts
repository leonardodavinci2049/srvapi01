import { Module } from '@nestjs/common';
import { ProductWebService } from './product-web.service';
import { ProductWebController } from './product-web.controller';

@Module({
  controllers: [ProductWebController],
  providers: [ProductWebService],
})
export class ProductWebModule {}
