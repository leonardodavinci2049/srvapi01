import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { ProductManagerController } from './product-manager.controller';
import { ProductManagerService } from './product-manager.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [ProductManagerController],
  providers: [ProductManagerService],
})
export class ProductManagerModule {}
