import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductPdvController } from './product-pdv.controller';
import { ProductPdvService } from './product-pdv.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductPdvController],
  providers: [ProductPdvService],
})
export class ProductPdvModule {}
