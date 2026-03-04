import { Module } from '@nestjs/common';
import { ProductInlineService } from './product-inline.service';
import { ProductInlineController } from './product-inline.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductInlineController],
  providers: [ProductInlineService],
})
export class ProductInlineModule {}
