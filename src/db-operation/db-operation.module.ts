import { Module } from '@nestjs/common';
import { DbOperationService } from './db-operation.service';

@Module({
  providers: [DbOperationService],
})
export class DbOperationModule {}
