import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { ProductWebController } from './product-web.controller';
import { ProductWebService } from './product-web.service';

@Module({
  imports: [DbOperationModule],
  controllers: [ProductWebController],
  providers: [ProductWebService],
})
export class ProductWebModule {}
