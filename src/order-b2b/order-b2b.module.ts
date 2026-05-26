import { Module } from '@nestjs/common';
import { OrderB2bService } from './order-b2b.service';
import { OrderB2bController } from './order-b2b.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
   imports: [DatabaseModule],
  controllers: [OrderB2bController],
  providers: [OrderB2bService],
})
export class OrderB2bModule {}
