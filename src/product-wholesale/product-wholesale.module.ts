import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { ProductWholesaleController } from './product-wholesale.controller';
import { ProductWholesaleService } from './product-wholesale.service';

@Module({
  imports: [DbOperationModule],
  controllers: [ProductWholesaleController],
  providers: [ProductWholesaleService],
})
export class ProductWholesaleModule {}
