import { Module } from '@nestjs/common';
import { CustomerInlineService } from './customer-inline.service';
import { CustomerInlineController } from './customer-inline.controller';

@Module({
  controllers: [CustomerInlineController],
  providers: [CustomerInlineService],
})
export class CustomerInlineModule {}
