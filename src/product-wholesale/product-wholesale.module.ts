import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { ProductWholesaleController } from './product-wholesale.controller';
import { ProductWholesaleService } from './product-wholesale.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [ProductWholesaleController],
  providers: [ProductWholesaleService],
})
export class ProductWholesaleModule {}
