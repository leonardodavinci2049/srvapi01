import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { EntryService } from './entry.service';

import { EntryCreateV2Dto } from './dto/entry-create-v2.dto';
import { EntryDeleteV2Dto } from './dto/entry-delete-v2.dto';
import { EntryFindAllV2Dto } from './dto/entry-find-all-v2.dto';
import { EntryFindIdV2Dto } from './dto/entry-find-id-v2.dto';
import { EntryFindSearchV2Dto } from './dto/entry-find-search-v2.dto';
import { EntryProcessInventoryV2Dto } from './dto/entry-process-inventory-v2.dto';
import { EntryUpdCarrierIdDto } from './dto/entry-upd-carrier-id.dto';
import { EntryUpdGeneralFieldDto } from './dto/entry-upd-general-field.dto';
import { EntryUpdMainDto } from './dto/entry-upd-main.dto';
import { EntryUpdNotesDto } from './dto/entry-upd-notes.dto';
import { EntryUpdSupplierIdDto } from './dto/entry-upd-supplier-id.dto';
import { EntryUpdTaxRatesDto } from './dto/entry-upd-tax-rates.dto';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

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
        auth: '/api/entry',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-create')
  entryCreateV2(@Body() dataJsonDto: EntryCreateV2Dto) {
    return this.entryService.taskEntryCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-find-all')
  entryFindAllV2(@Body() dataJsonDto: EntryFindAllV2Dto) {
    return this.entryService.taskEntryFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-find-id')
  entryFindIdV2(@Body() dataJsonDto: EntryFindIdV2Dto) {
    return this.entryService.taskEntryFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-find-search')
  entryFindSearchV2(@Body() dataJsonDto: EntryFindSearchV2Dto) {
    return this.entryService.taskEntryFindSearchV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-process-inventory')
  entryProcessInventoryV2(@Body() dataJsonDto: EntryProcessInventoryV2Dto) {
    return this.entryService.taskEntryProcessInventoryV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-upd-main')
  entryUpdMainV2(@Body() dataJsonDto: EntryUpdMainDto) {
    return this.entryService.taskEntryUpdMainV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-upd-notes')
  entryUpdNotesV2(@Body() dataJsonDto: EntryUpdNotesDto) {
    return this.entryService.taskEntryUpdNotesV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-upd-carrier-id')
  entryUpdCarrierIdV2(@Body() dataJsonDto: EntryUpdCarrierIdDto) {
    return this.entryService.taskEntryUpdCarrierIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-upd-supplier-id')
  entryUpdSupplierIdV2(@Body() dataJsonDto: EntryUpdSupplierIdDto) {
    return this.entryService.taskEntryUpdSupplierIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-upd-tax-rates')
  entryUpdTaxRatesV2(@Body() dataJsonDto: EntryUpdTaxRatesDto) {
    return this.entryService.taskEntryUpdTaxRatesV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-upd-general-field')
  entryUpdGeneralFieldV2(@Body() dataJsonDto: EntryUpdGeneralFieldDto) {
    return this.entryService.taskEntryUpdGeneralFieldV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/entry-delete')
  entryDeleteV2(@Body() dataJsonDto: EntryDeleteV2Dto) {
    return this.entryService.taskEntryDeleteV2(dataJsonDto);
  }
}
