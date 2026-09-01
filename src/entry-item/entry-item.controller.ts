import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { EntryItemService } from './entry-item.service';

import { EntryItemCreateV2Dto } from './dto/entry-item-create-v2.dto';
import { EntryItemDeleteV2Dto } from './dto/entry-item-delete-v2.dto';
import { EntryItemFindAllV2Dto } from './dto/entry-item-find-all-v2.dto';
import { EntryItemFindEntryIdV2Dto } from './dto/entry-item-find-entry-id-v2.dto';
import { EntryItemFindIdV2Dto } from './dto/entry-item-find-id-v2.dto';
import { EntryItemFindSearchV2Dto } from './dto/entry-item-find-search-v2.dto';
import { EntryItemProductSearchV2Dto } from './dto/entry-item-product-search-v2.dto';
import { EntryItemUpdDollarValueDto } from './dto/entry-item-upd-dollar-value.dto';
import { EntryItemUpdGeneralFieldDto } from './dto/entry-item-upd-general-field.dto';
import { EntryItemUpdMainDto } from './dto/entry-item-upd-main.dto';
import { EntryItemUpdNotesDto } from './dto/entry-item-upd-notes.dto';
import { EntryItemUpdProductCostDto } from './dto/entry-item-upd-product-cost.dto';
import { EntryItemUpdProductPriceDto } from './dto/entry-item-upd-product-price.dto';
import { EntryItemUpdTaxCodesDto } from './dto/entry-item-upd-tax-codes.dto';
import { EntryItemUpdTaxRatesDto } from './dto/entry-item-upd-tax-rates.dto';

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

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-create')
  entryItemCreateV2(@Body() dataJsonDto: EntryItemCreateV2Dto) {
    return this.entryItemService.taskEntryItemCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-find-all')
  entryItemFindAllV2(@Body() dataJsonDto: EntryItemFindAllV2Dto) {
    return this.entryItemService.taskEntryItemFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-find-entry-id')
  entryItemFindEntryIdV2(@Body() dataJsonDto: EntryItemFindEntryIdV2Dto) {
    return this.entryItemService.taskEntryItemFindEntryIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-find-id')
  entryItemFindIdV2(@Body() dataJsonDto: EntryItemFindIdV2Dto) {
    return this.entryItemService.taskEntryItemFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-find-search')
  entryItemFindSearchV2(@Body() dataJsonDto: EntryItemFindSearchV2Dto) {
    return this.entryItemService.taskEntryItemFindSearchV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-product-search')
  entryItemProductSearchV2(@Body() dataJsonDto: EntryItemProductSearchV2Dto) {
    return this.entryItemService.taskEntryItemProductSearchV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-upd-main')
  entryItemUpdMainV2(@Body() dataJsonDto: EntryItemUpdMainDto) {
    return this.entryItemService.taskEntryItemUpdMainV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-upd-notes')
  entryItemUpdNotesV2(@Body() dataJsonDto: EntryItemUpdNotesDto) {
    return this.entryItemService.taskEntryItemUpdNotesV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-upd-dollar-value')
  entryItemUpdDollarValueV2(@Body() dataJsonDto: EntryItemUpdDollarValueDto) {
    return this.entryItemService.taskEntryItemUpdDollarValueV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-upd-product-cost')
  entryItemUpdProductCostV2(@Body() dataJsonDto: EntryItemUpdProductCostDto) {
    return this.entryItemService.taskEntryItemUpdProductCostV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-upd-product-price')
  entryItemUpdProductPriceV2(@Body() dataJsonDto: EntryItemUpdProductPriceDto) {
    return this.entryItemService.taskEntryItemUpdProductPriceV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-upd-tax-codes')
  entryItemUpdTaxCodesV2(@Body() dataJsonDto: EntryItemUpdTaxCodesDto) {
    return this.entryItemService.taskEntryItemUpdTaxCodesV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-upd-tax-rates')
  entryItemUpdTaxRatesV2(@Body() dataJsonDto: EntryItemUpdTaxRatesDto) {
    return this.entryItemService.taskEntryItemUpdTaxRatesV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-upd-general-field')
  entryItemUpdGeneralFieldV2(@Body() dataJsonDto: EntryItemUpdGeneralFieldDto) {
    return this.entryItemService.taskEntryItemUpdGeneralFieldV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-item-delete')
  entryItemDeleteV2(@Body() dataJsonDto: EntryItemDeleteV2Dto) {
    return this.entryItemService.taskEntryItemDeleteV2(dataJsonDto);
  }
}
