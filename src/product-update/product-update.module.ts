import { Module } from '@nestjs/common';
import { ProductUpdateService } from './product-update.service';
import { ProductUpdateController } from './product-update.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductUpdateController],
  providers: [ProductUpdateService],
})
export class ProductUpdateModule {}
