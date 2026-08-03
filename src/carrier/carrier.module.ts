import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CarrierController } from './carrier.controller';
import { CarrierService } from './carrier.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CarrierController],
  providers: [CarrierService],
})
export class CarrierModule {}
