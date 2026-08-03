import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductWebController } from './product-web.controller';
import { ProductWebService } from './product-web.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductWebController],
  providers: [ProductWebService],
})
export class ProductWebModule {}
