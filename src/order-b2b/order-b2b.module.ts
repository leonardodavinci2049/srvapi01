import { Module } from '@nestjs/common';
import { OrderB2bService } from './order-b2b.service';
import { OrderB2bController } from './order-b2b.controller';

@Module({
  controllers: [OrderB2bController],
  providers: [OrderB2bService],
})
export class OrderB2bModule {}
