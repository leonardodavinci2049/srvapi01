import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TaxonomyBaseService } from './taxonomy-base.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { TaxonomyCreateV3Dto } from './dto/taxonomy-create-v3.dto';
import { TaxonomyDeleteV3Dto } from './dto/taxonomy-delete-v3.dto';
import { TaxonomyFindAllV3Dto } from './dto/taxonomy-find-all-v3.dto';
import { TaxonomyFindIdV3Dto } from './dto/taxonomy-find-id-v3.dto';
import { TaxonomyFindMenuV3Dto } from './dto/taxonomy-find-menu-v3.dto';
import { TaxonomyUpdateV3Dto } from './dto/taxonomy-update-v3.dto';
import { TaxonomyUpdMetadataV3Dto } from './dto/taxonomy-upd-metadata-v3.dto';

@Controller('taxonomy-base')
export class TaxonomyBaseController {
  constructor(private readonly taxonomyBaseService: TaxonomyBaseService) {}

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
        auth: '/api/taxonomy-base',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-create')
  taxonomyCreateV3(@Body() dataJsonDto: TaxonomyCreateV3Dto) {
    return this.taxonomyBaseService.taskTaxonomyCreateV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-find-all')
  taxonomyFindAllV3(@Body() dataJsonDto: TaxonomyFindAllV3Dto) {
    return this.taxonomyBaseService.taskTaxonomyFindAllV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-find-menu')
  taxonomyFindMenuV3(@Body() dataJsonDto: TaxonomyFindMenuV3Dto) {
    return this.taxonomyBaseService.taskTaxonomyFindMenuV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-find-id')
  taxonomyFindIdV3(@Body() dataJsonDto: TaxonomyFindIdV3Dto) {
    return this.taxonomyBaseService.taskTaxonomyFindIdV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-update')
  taxonomyUpdateV3(@Body() dataJsonDto: TaxonomyUpdateV3Dto) {
    return this.taxonomyBaseService.taskTaxonomyUpdateV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-upd-metadata')
  taxonomyUpdInlMetadataV3(@Body() dataJsonDto: TaxonomyUpdMetadataV3Dto) {
    return this.taxonomyBaseService.taskTaxonomyUpdInlMetadataV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-delete')
  taxonomyDeleteV3(@Body() dataJsonDto: TaxonomyDeleteV3Dto) {
    return this.taxonomyBaseService.taskTaxonomyDeleteV3(dataJsonDto);
  }
}
