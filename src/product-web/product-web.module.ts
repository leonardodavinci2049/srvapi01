import { Module } from '@nestjs/common';
import { ProductWebService } from './product-web.service';
import { ProductWebController } from './product-web.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductWebController],
  providers: [ProductWebService],
})
export class ProductWebModule {}
