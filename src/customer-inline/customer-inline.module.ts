import { Module } from '@nestjs/common';
import { CustomerInlineService } from './customer-inline.service';
import { CustomerInlineController } from './customer-inline.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerInlineController],
  providers: [CustomerInlineService],
})
export class CustomerInlineModule {}
