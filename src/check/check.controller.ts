import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CheckService } from './check.service';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { CheckIfExistsDto } from './dto/check-if-exists.dto';
import { CheckIfExistsV3Dto } from './dto/check-if-exists-v3.dto';

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
  // https://wserpapp01.comsuporte.com.br/api/check
  @UseGuards(AuthGuard)
  @Post('v3/check-if-email-exists')
  checkIfCnpjExistsV3(@Body() dataJsonDto: CheckIfExistsV3Dto) {
    return this.checkService.taskCheckIfCnpjExistsV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/check-if-cpf-exists')
  checkIfCpfExistsV3(@Body() dataJsonDto: CheckIfExistsV3Dto) {
    return this.checkService.taskCheckIfCpfExistsV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/check-if-email-exists')
  checkIfEmailExistsV3(@Body() dataJsonDto: CheckIfExistsV3Dto) {
    return this.checkService.taskCheckIfEmailExistsV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/check-if-product-name-exists')
  checkIfProductNameExistV3(@Body() dataJsonDto: CheckIfExistsV3Dto) {
    return this.checkService.taskCheckIfProductNameExistV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/check-if-product-slug-exists')
  checkIfProductSlugExistV3(@Body() dataJsonDto: CheckIfExistsV3Dto) {
    return this.checkService.taskCheckIfProductSlugExistV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/check-if-taxonomy-name-exists')
  checkIfTaxonomyNameExistsV3(@Body() dataJsonDto: CheckIfExistsV3Dto) {
    return this.checkService.taskCheckIfTaxonomyNameExistsV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/check-if-taxonomy-slug-exists')
  checkIfTaxonomySlugExistsV3(@Body() dataJsonDto: CheckIfExistsV3Dto) {
    return this.checkService.taskCheckIfTaxonomySlugExistsV3(dataJsonDto);
  }

  //  ======== versão antiga - manter para compatibilidade com frontend antigo ========

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
  @Post('v2/check-if-product-name-exists')
  checkIfProductNameExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfProductNameExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/check-if-product-slug-exists')
  checkIfProductSlugExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfProductSlugExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/check-if-taxonomy-name-exists')
  checkIfTaxonomyNameExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfTaxonomyNameExist(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/check-if-taxonomy-slug-exists')
  checkIfTaxonomySlugExists(@Body() dataJsonDto: CheckIfExistsDto) {
    return this.checkService.tskCheckIfTaxonomySlugExist(dataJsonDto);
  }
}
