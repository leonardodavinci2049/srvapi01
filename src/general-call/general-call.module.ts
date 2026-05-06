import { Module } from '@nestjs/common';
import { GeneralCallService } from './general-call.service';
import { GeneralCallController } from './general-call.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [GeneralCallController],
  providers: [GeneralCallService],
})
export class GeneralCallModule {}
