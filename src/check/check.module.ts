import { Module } from '@nestjs/common';
import { CheckService } from './check.service';
import { CheckController } from './check.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CheckController],
  providers: [CheckService],
})
export class CheckModule {}
