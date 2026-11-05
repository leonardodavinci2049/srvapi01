import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { OrderManagerController } from './order_manager.controller';
import { OrderManagerService } from './order_manager.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [OrderManagerController],
  providers: [OrderManagerService],
})
export class OrderManagerModule {}
