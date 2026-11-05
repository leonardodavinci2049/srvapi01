import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
