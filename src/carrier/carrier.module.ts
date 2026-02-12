import { Module } from '@nestjs/common';
import { CarrierService } from './carrier.service';
import { CarrierController } from './carrier.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CarrierController],
  providers: [CarrierService],
})
export class CarrierModule {}
