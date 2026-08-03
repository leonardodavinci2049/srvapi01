import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { GeneralTableUpdInlFieldV2Dto } from './dto/general_table_upd_inl_field_v2.dto';
import { GeneralUpdProcedureV1Dto } from './dto/general-upd-procedure-v1.dto';
import { GeneralCallService } from './general-call.service';

@Controller('general-call')
export class GeneralCallController {
  constructor(private readonly generalCallService: GeneralCallService) {}

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
        auth: '/api/general-call',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v1/general-upd-procedure')
  generalUpdProcedureV1(@Body() dataJsonDto: GeneralUpdProcedureV1Dto) {
    return this.generalCallService.tskGeneralUpdProcedureV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/general-table-upd-inl-field')
  generalTableUpdInlFieldV2(@Body() dataJsonDto: GeneralTableUpdInlFieldV2Dto) {
    return this.generalCallService.tskGeneralTableUpdInlFieldV2(dataJsonDto);
  }
}
