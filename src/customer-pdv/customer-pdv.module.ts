import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CustomerPdvController } from './customer-pdv.controller';
import { CustomerPdvService } from './customer-pdv.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerPdvController],
  providers: [CustomerPdvService],
})
export class CustomerPdvModule {}
