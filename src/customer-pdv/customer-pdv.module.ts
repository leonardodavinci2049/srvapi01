import { Module } from '@nestjs/common';
import { customerPdvService } from './customer-pdv.service';
import { customerPdvController } from './customer-pdv.controller';

@Module({
  controllers: [customerPdvController],
  providers: [customerPdvService],
})
export class customerPdvModule {}
