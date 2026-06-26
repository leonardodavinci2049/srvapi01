import { Module } from '@nestjs/common';
import { PhysicalProductService } from './physical_product.service';
import { PhysicalProductController } from './physical_product.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PhysicalProductController],
  providers: [PhysicalProductService],
})
export class PhysicalProductModule {}
