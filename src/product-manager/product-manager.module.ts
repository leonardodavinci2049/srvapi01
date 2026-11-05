import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { ProductManagerController } from './product-manager.controller';
import { ProductManagerService } from './product-manager.service';

@Module({
  imports: [DbOperationModule],
  controllers: [ProductManagerController],
  providers: [ProductManagerService],
})
export class ProductManagerModule {}
