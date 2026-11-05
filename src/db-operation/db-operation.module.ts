import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { DbOperationService } from './db-operation.service';

@Module({
  imports: [DbConnectionModule],
  providers: [DbOperationService],
  exports: [DbOperationService],
})
export class DbOperationModule {}
