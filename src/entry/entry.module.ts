import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
