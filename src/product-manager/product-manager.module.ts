import { Module } from '@nestjs/common';
import { ProductManagerService } from './product-manager.service';
import { ProductManagerController } from './product-manager.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductManagerController],
  providers: [ProductManagerService],
})
export class ProductManagerModule {}
