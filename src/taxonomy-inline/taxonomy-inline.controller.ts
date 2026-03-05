import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TaxonomyInlineService } from './taxonomy-inline.service';

import { AuthGuard } from 'src/core/guards/auth.guard';

import { TaxonomyUpdInlImagePathV3Dto } from './dto/taxonomy-upd-inl-image-path-v3.dto';
import { TaxonomyUpdInlInactiveV3Dto } from './dto/taxonomy-upd-inl-inactive-v3.dto';
import { TaxonomyUpdInlNameV3Dto } from './dto/taxonomy-upd-inl-name-v3.dto';
import { TaxonomyUpdInlNotesV3Dto } from './dto/taxonomy-upd-inl-notes-v3.dto';
import { TaxonomyUpdInlOrderV3Dto } from './dto/taxonomy-upd-inl-order-v3.dto';
import { TaxonomyUpdInlParentIdV3Dto } from './dto/taxonomy-upd-inl-parent-id-v3.dto';
import { TaxonomyUpdInlQtProductsV3Dto } from './dto/taxonomy-upd-inl-qt-products-v3.dto';
import { TaxonomyUpdInlSlugV3Dto } from './dto/taxonomy-upd-inl-slug-v3.dto';

@Controller('taxonomy-inline')
export class TaxonomyInlineController {
  constructor(private readonly taxonomyInlineService: TaxonomyInlineService) {}

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
        auth: '/api/taxonomy-inline',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-upd-inl-parent-id')
  taxonomyUpdInlParentIdV3(@Body() dataJsonDto: TaxonomyUpdInlParentIdV3Dto) {
    return this.taxonomyInlineService.taskTaxonomyUpdInlParentIdV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-upd-inl-notes')
  taxonomyUpdInlNotesV3(@Body() dataJsonDto: TaxonomyUpdInlNotesV3Dto) {
    return this.taxonomyInlineService.taskTaxonomyUpdInlNotesV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-upd-inl-name')
  taxonomyUpdInlNameV3(@Body() dataJsonDto: TaxonomyUpdInlNameV3Dto) {
    return this.taxonomyInlineService.taskTaxonomyUpdInlNameV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-upd-inl-image-path')
  taxonomyUpdInlImagePathV3(@Body() dataJsonDto: TaxonomyUpdInlImagePathV3Dto) {
    return this.taxonomyInlineService.taskTaxonomyUpdInlImagePathV3(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-upd-inl-inactive')
  taxonomyUpdInlInactiveV3(@Body() dataJsonDto: TaxonomyUpdInlInactiveV3Dto) {
    return this.taxonomyInlineService.taskTaxonomyUpdInlInactiveV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-upd-inl-order')
  taxonomyUpdInlOrderV3(@Body() dataJsonDto: TaxonomyUpdInlOrderV3Dto) {
    return this.taxonomyInlineService.taskTaxonomyUpdInlOrderV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-upd-inl-qt-products')
  taxonomyUpdInlQtProductsV3(
    @Body() dataJsonDto: TaxonomyUpdInlQtProductsV3Dto,
  ) {
    return this.taxonomyInlineService.taskTaxonomyUpdInlQtProductsV3(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-upd-inl-slug')
  taxonomyUpdInlSlugV3(@Body() dataJsonDto: TaxonomyUpdInlSlugV3Dto) {
    return this.taxonomyInlineService.taskTaxonomyUpdInlSlugV3(dataJsonDto);
  }
}
