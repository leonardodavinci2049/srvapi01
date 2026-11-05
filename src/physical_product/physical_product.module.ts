import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { PhysicalProductController } from './physical_product.controller';
import { PhysicalProductService } from './physical_product.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [PhysicalProductController],
  providers: [PhysicalProductService],
})
export class PhysicalProductModule {}
