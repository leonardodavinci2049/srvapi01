import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { OrderB2bController } from './order-b2b.controller';
import { OrderB2bService } from './order-b2b.service';

@Module({
  imports: [DbOperationModule],
  controllers: [OrderB2bController],
  providers: [OrderB2bService],
})
export class OrderB2bModule {}
