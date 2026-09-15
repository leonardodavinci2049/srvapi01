import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductWholesaleController } from './product-wholesale.controller';
import { ProductWholesaleService } from './product-wholesale.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductWholesaleController],
  providers: [ProductWholesaleService],
})
export class ProductWholesaleModule {}
