import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OrderB2bController } from './order-b2b.controller';
import { OrderB2bService } from './order-b2b.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderB2bController],
  providers: [OrderB2bService],
})
export class OrderB2bModule {}
