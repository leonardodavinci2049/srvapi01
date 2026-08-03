import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductBaseController } from './product-base.controller';
import { ProductBaseService } from './product-base.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductBaseController],
  providers: [ProductBaseService],
})
export class ProductBaseModule {}
