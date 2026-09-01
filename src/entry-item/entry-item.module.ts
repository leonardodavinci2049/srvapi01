import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EntryItemController } from './entry-item.controller';
import { EntryItemService } from './entry-item.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EntryItemController],
  providers: [EntryItemService],
})
export class EntryItemModule {}
