import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductInlineController } from './product-inline.controller';
import { ProductInlineService } from './product-inline.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductInlineController],
  providers: [ProductInlineService],
})
export class ProductInlineModule {}
