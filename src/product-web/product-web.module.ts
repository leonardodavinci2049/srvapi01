import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { ProductWebController } from './product-web.controller';
import { ProductWebService } from './product-web.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [ProductWebController],
  providers: [ProductWebService],
})
export class ProductWebModule {}
