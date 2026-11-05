import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { CustomerUpdController } from './customer-upd.controller';
import { CustomerUpdService } from './customer-upd.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [CustomerUpdController],
  providers: [CustomerUpdService],
})
export class CustomerUpdModule {}
