import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';

@Module({
  imports: [DbOperationModule],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
