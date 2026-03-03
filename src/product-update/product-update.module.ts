import { Module } from '@nestjs/common';
import { ProductUpdateService } from './product-update.service';
import { ProductUpdateController } from './product-update.controller';

@Module({
  controllers: [ProductUpdateController],
  providers: [ProductUpdateService],
})
export class ProductUpdateModule {}
