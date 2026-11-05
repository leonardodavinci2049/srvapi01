import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
