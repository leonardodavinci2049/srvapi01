import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CustomerInlineController } from './customer-inline.controller';
import { CustomerInlineService } from './customer-inline.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerInlineController],
  providers: [CustomerInlineService],
})
export class CustomerInlineModule {}
