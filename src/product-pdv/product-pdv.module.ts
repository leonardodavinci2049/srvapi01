import { Module } from '@nestjs/common';
import { ProductPdvService } from './product-pdv.service';
import { ProductPdvController } from './product-pdv.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductPdvController],
  providers: [ProductPdvService],
})
export class ProductPdvModule {}
