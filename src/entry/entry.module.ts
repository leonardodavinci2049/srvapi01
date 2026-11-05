import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';

@Module({
  imports: [DbOperationModule],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
