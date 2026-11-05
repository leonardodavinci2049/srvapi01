import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { GeneralCallController } from './general-call.controller';
import { GeneralCallService } from './general-call.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [GeneralCallController],
  providers: [GeneralCallService],
})
export class GeneralCallModule {}
