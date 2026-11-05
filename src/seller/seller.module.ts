import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [SellerController],
  providers: [SellerService],
})
export class SellerModule {}
