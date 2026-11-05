import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { CustomerPdvController } from './customer-pdv.controller';
import { CustomerPdvService } from './customer-pdv.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [CustomerPdvController],
  providers: [CustomerPdvService],
})
export class CustomerPdvModule {}
