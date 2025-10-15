import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CheckService } from './check.service';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { CheckIfEmailExistsDto } from './dto/check-if-email-exists.dto';
import { CheckIfCpfExistsDto } from './dto/check-if-cpf-exists.dto';
import { CheckIfCnpjExistsDto } from './dto/check-if-cnpj-exists.dto';

@Controller('check')
export class CheckController {
  constructor(private readonly checkService: CheckService) {}

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
        auth: '/api/check',
      },
    };
  }
  // https://wserpapp01.comsuporte.com.br/api/cart

  // -- dasbord  ---
  @UseGuards(AuthGuard)
  @Post('v1/check-if-email-exists')
  checkIfEmailExists(@Body() dataJsonDto: CheckIfEmailExistsDto) {
    return this.checkService.tskCheckIfEmailExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/check-if-cpf-exists')
  checkIfCpfExists(@Body() dataJsonDto: CheckIfCpfExistsDto) {
    return this.checkService.tskCheckIfCpfExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/check-if-cnpj-exists')
  checkIfCnpjExists(@Body() dataJsonDto: CheckIfCnpjExistsDto) {
    return this.checkService.tskCheckIfCnpjExist(dataJsonDto);
  }
}
