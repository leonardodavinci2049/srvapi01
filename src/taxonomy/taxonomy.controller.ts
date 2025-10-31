import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { TaxonomyService } from './taxonomy.service';
import { TaxonomyCreateDto } from './dto/taxonomy-create.dto';
import { TaxonomyRelCreateDto } from './dto/taxonomy-rel-create.dto';
import { TaxonomyFindIdDto } from './dto/taxonomy-find-id.dto';
import { TaxonomyFindDto } from './dto/taxonomy-find.dto';
import { TaxonomyFindMenuDto } from './dto/taxonomy-find-menu.dto';
import { TaxonomyRelProdutoDto } from './dto/taxonomy-rel-produto.dto';
import { TaxonomyUpdateDto } from './dto/taxonomy-update.dto';
import { TaxonomyDeleteDto } from './dto/taxonomy-delete.dto';
import { TaxonomyRelDeleteDto } from './dto/taxonomy-rel-delete.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { TaxonomyUpdNameDto } from './dto/taxonomy-upd-name.dto';
import { TaxonomyUpdParentIdDto } from './dto/taxonomy-upd-parent-id.dto';
import { TaxonomyUpdOrdemDto } from './dto/taxonomy-upd-ordem.dto';
import { TaxonomyUpdInactiveDto } from './dto/taxonomy-upd-inactive.dto';
import { TaxonomyUpdMetadataDto } from './dto/taxonomy-upd-metadata.dto';
import { TaxonomyUpdPathImageDto } from './dto/taxonomy-upd-path_image.dto';

@Controller('taxonomy')
export class TaxonomyController {
  constructor(private readonly taxonomyService: TaxonomyService) {}

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
        auth: '/api/taxonomy',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-create')
  taxonomyCreateV2(@Body() dataJsonDto: TaxonomyCreateDto) {
    return this.taxonomyService.tskTaxonomyCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-rel-create')
  taxonomyRelCreateV2(@Body() dataJsonDto: TaxonomyRelCreateDto) {
    return this.taxonomyService.tskTaxonomyRelCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-find-id')
  taxonomyFindIdV2(@Body() dataJsonDto: TaxonomyFindIdDto) {
    return this.taxonomyService.tskTaxonomyFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-find')
  taxonomyFindV2(@Body() dataJsonDto: TaxonomyFindDto) {
    return this.taxonomyService.tskTaxonomyFindV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-find-menu')
  taxonomyFindMenuV2(@Body() dataJsonDto: TaxonomyFindMenuDto) {
    return this.taxonomyService.tskTaxonomyFindMenuV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-rel-produto')
  taxonomyRelProdutoV2(@Body() dataJsonDto: TaxonomyRelProdutoDto) {
    return this.taxonomyService.tskTaxonomyRelProdutoV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-update')
  taxonomyUpdateV2(@Body() dataJsonDto: TaxonomyUpdateDto) {
    return this.taxonomyService.tskTaxonomyUpdateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-upd-name')
  taxonomyUpdNameV2(@Body() dataJsonDto: TaxonomyUpdNameDto) {
    return this.taxonomyService.tskTaxonomyUpdNameV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-upd-parent-id')
  taxonomyUpdParentIdV2(@Body() dataJsonDto: TaxonomyUpdParentIdDto) {
    return this.taxonomyService.tskTaxonomyUpdParentIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-upd-ordem')
  taxonomyUpdOrdemV2(@Body() dataJsonDto: TaxonomyUpdOrdemDto) {
    return this.taxonomyService.tskTaxonomyUpdOrdemV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-upd-path-image')
  taxonomyUpdPathImageV2(@Body() dataJsonDto: TaxonomyUpdPathImageDto) {
    return this.taxonomyService.tskTaxonomyUpdPathImageV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-upd-inactive')
  taxonomyUpdInactiveV2(@Body() dataJsonDto: TaxonomyUpdInactiveDto) {
    return this.taxonomyService.tskTaxonomyUpdInactiveV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-upd-metadata')
  taxonomyUpdMetadataV2(@Body() dataJsonDto: TaxonomyUpdMetadataDto) {
    return this.taxonomyService.tskTaxonomyUpdMetadataV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-delete')
  taxonomyDeleteV2(@Body() dataJsonDto: TaxonomyDeleteDto) {
    return this.taxonomyService.tskTaxonomyDeleteV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/taxonomy-rel-delete')
  taxonomyRelDeleteV2(@Body() dataJsonDto: TaxonomyRelDeleteDto) {
    return this.taxonomyService.tskTaxonomyRelDeleteV2(dataJsonDto);
  }
}
