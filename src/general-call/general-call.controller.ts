import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { GeneralCallService } from './general-call.service';
import { GeneralUpdProcedureV1Dto } from './dto/general-upd-procedure-v1.dto';


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


}
