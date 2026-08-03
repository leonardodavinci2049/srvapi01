import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PhysicalProductController } from './physical_product.controller';
import { PhysicalProductService } from './physical_product.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PhysicalProductController],
  providers: [PhysicalProductService],
})
export class PhysicalProductModule {}
