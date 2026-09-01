import { Controller, Get, Post, } from '@nestjs/common';
import { EntryItemService } from './entry-item.service';


@Controller('entry-item')
export class EntryItemController {
  constructor(private readonly entryItemService: EntryItemService) {}


  @Get()
  getHello() {
    return {
      name: 'Wholesale API',
      status: 'online',
      version: '1.0.1',
      documentation: '/',
      timestamp: new Date().toISOString(),
      endpoints: {
        base: '/api',
        auth: '/api/entry-item',
      },
    };
  }

  @Post()
  create() {
    return this.entryItemService.create();
  }


}
