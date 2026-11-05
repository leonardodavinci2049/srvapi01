import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { ProductPdvController } from './product-pdv.controller';
import { ProductPdvService } from './product-pdv.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [ProductPdvController],
  providers: [ProductPdvService],
})
export class ProductPdvModule {}
