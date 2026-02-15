import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';

import { PtypeService } from './ptype.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

import { TypeFindAllV2Dto } from './dto/type-find-all-v2.dto';
import { TypeCreateV2Dto } from './dto/type-create-v2.dto';
import { TypeFindIdV2Dto } from './dto/type-find-id-v2.dto';
import { TypeUpdateV2Dto } from './dto/type-update-v2.dto';
import { TypeDeleteV2Dto } from './dto/type-delete-v2.dto';

@Controller('ptype')
export class PtypeController {
  constructor(private readonly ptypeService: PtypeService) {}

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
        auth: '/api/ptype',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/ptype-create')
  ptypeCreateV2(@Body() dataJsonDto: TypeCreateV2Dto) {
    return this.ptypeService.taskTypeCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/ptype-find-all')
  ptypeFindAllV2(@Body() dataJsonDto: TypeFindAllV2Dto) {
    return this.ptypeService.taskTypeFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/ptype-find-id')
  ptypeFindIdV2(@Body() dataJsonDto: TypeFindIdV2Dto) {
    return this.ptypeService.taskTypeFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/ptype-update')
  ptypeUpdateV2(@Body() dataJsonDto: TypeUpdateV2Dto) {
    return this.ptypeService.taskTypeUpdateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/ptype-delete')
  ptypeDeleteV2(@Body() dataJsonDto: TypeDeleteV2Dto) {
    return this.ptypeService.taskTypeDeleteV2(dataJsonDto);
  }
}
