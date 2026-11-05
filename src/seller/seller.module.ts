import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';

@Module({
  imports: [DbOperationModule],
  controllers: [SellerController],
  providers: [SellerService],
})
export class SellerModule {}
