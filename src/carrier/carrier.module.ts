import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { CarrierController } from './carrier.controller';
import { CarrierService } from './carrier.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [CarrierController],
  providers: [CarrierService],
})
export class CarrierModule {}
