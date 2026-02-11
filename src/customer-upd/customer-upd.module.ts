import { Module } from '@nestjs/common';
import { CustomerUpdService } from './customer-upd.service';
import { CustomerUpdController } from './customer-upd.controller';

@Module({
  controllers: [CustomerUpdController],
  providers: [CustomerUpdService],
})
export class CustomerUpdModule {}
