import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { ProductPdvController } from './product-pdv.controller';
import { ProductPdvService } from './product-pdv.service';

@Module({
  imports: [DbOperationModule],
  controllers: [ProductPdvController],
  providers: [ProductPdvService],
})
export class ProductPdvModule {}
