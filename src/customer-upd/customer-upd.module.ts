import { Module } from '@nestjs/common';
import { CustomerUpdService } from './customer-upd.service';
import { CustomerUpdController } from './customer-upd.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerUpdController],
  providers: [CustomerUpdService],
})
export class CustomerUpdModule {}
