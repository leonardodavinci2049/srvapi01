import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductManagerController } from './product-manager.controller';
import { ProductManagerService } from './product-manager.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductManagerController],
  providers: [ProductManagerService],
})
export class ProductManagerModule {}
