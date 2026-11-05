import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { CarrierController } from './carrier.controller';
import { CarrierService } from './carrier.service';

@Module({
  imports: [DbOperationModule],
  controllers: [CarrierController],
  providers: [CarrierService],
})
export class CarrierModule {}
