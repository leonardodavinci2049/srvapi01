import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { EntryItemController } from './entry-item.controller';
import { EntryItemService } from './entry-item.service';

@Module({
  imports: [DbOperationModule],
  controllers: [EntryItemController],
  providers: [EntryItemService],
})
export class EntryItemModule {}
