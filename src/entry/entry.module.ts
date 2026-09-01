import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
