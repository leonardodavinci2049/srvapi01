import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { EntryItemController } from './entry-item.controller';
import { EntryItemService } from './entry-item.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [EntryItemController],
  providers: [EntryItemService],
})
export class EntryItemModule {}
