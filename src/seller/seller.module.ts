import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SellerController],
  providers: [SellerService],
})
export class SellerModule {}
