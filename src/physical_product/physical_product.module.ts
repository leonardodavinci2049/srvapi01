import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { PhysicalProductController } from './physical_product.controller';
import { PhysicalProductService } from './physical_product.service';

@Module({
  imports: [DbOperationModule],
  controllers: [PhysicalProductController],
  providers: [PhysicalProductService],
})
export class PhysicalProductModule {}
