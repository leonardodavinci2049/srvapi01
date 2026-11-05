import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { OrderB2bController } from './order-b2b.controller';
import { OrderB2bService } from './order-b2b.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [OrderB2bController],
  providers: [OrderB2bService],
})
export class OrderB2bModule {}
