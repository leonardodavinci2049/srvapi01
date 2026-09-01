import { Module } from '@nestjs/common';
import { EntryItemService } from './entry-item.service';
import { EntryItemController } from './entry-item.controller';

@Module({
  controllers: [EntryItemController],
  providers: [EntryItemService],
})
export class EntryItemModule {}
