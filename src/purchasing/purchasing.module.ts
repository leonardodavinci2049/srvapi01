import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PurchasingController } from './purchasing.controller';
import { PurchasingService } from './purchasing.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchasingController],
  providers: [PurchasingService],
})
export class PurchasingModule {}
