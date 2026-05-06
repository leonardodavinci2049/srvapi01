import { Module } from '@nestjs/common';
import { GeneralCallService } from './general-call.service';
import { GeneralCallController } from './general-call.controller';

@Module({
  controllers: [GeneralCallController],
  providers: [GeneralCallService],
})
export class GeneralCallModule {}
