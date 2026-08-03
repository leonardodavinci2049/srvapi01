import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CustomerUpdController } from './customer-upd.controller';
import { CustomerUpdService } from './customer-upd.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerUpdController],
  providers: [CustomerUpdService],
})
export class CustomerUpdModule {}
