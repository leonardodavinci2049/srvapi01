import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [DbOperationModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
