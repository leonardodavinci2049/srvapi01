import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';

import { PtypeService } from './ptype.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { TypeFindAllDto } from './dto/type-find-all.dto';

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
  @Post('v2/ptype-find-all')
  ptypeFindAllV2(@Body() dataJsonDto: TypeFindAllDto) {
    return this.ptypeService.tskPTypeFindV2(dataJsonDto);
  }
}
