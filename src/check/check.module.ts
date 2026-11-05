import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { CheckController } from './check.controller';
import { CheckService } from './check.service';

@Module({
  imports: [DbOperationModule],
  controllers: [CheckController],
  providers: [CheckService],
})
export class CheckModule {}
