import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CheckController } from './check.controller';
import { CheckService } from './check.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CheckController],
  providers: [CheckService],
})
export class CheckModule {}
