import { Module } from '@nestjs/common';
import { ProductBaseService } from './product-base.service';
import { ProductBaseController } from './product-base.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductBaseController],
  providers: [ProductBaseService],
})
export class ProductBaseModule {}
