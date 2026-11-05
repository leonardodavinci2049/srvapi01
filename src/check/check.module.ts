import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { CheckController } from './check.controller';
import { CheckService } from './check.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [CheckController],
  providers: [CheckService],
})
export class CheckModule {}
