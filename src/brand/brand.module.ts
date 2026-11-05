import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
