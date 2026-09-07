import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OrderManagerController } from './order_manager.controller';
import { OrderManagerService } from './order_manager.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderManagerController],
  providers: [OrderManagerService],
})
export class OrderManagerModule {}
