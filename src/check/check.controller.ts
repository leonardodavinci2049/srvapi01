import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CheckService } from './check.service';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { CheckIfExistsDto } from './dto/check-if-exists.dto';

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
  @Post('v2/check-if-email-exists')
  checkIfEmailExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfEmailExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/check-if-cpf-exists')
  checkIfCpfExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfCpfExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/check-if-cnpj-exists')
  checkIfCnpjExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfCnpjExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/check-if-taxonomy-slug-exists')
  checkIfTaxonomySlugExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfTaxonomySlugExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/check-if-product-name-exists')
  checkIfProductNameExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfProductNameExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/check-if-product-slug-exists')
  checkIfProductSlugExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfProductSlugExist(dataJsonDto);
  }
}
