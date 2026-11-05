import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { GeneralCallController } from './general-call.controller';
import { GeneralCallService } from './general-call.service';

@Module({
  imports: [DbOperationModule],
  controllers: [GeneralCallController],
  providers: [GeneralCallService],
})
export class GeneralCallModule {}
