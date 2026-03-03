import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TaxonomyRelService } from './taxonomy-rel.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { TaxonomyRelCreateV3Dto } from './dto/taxonomy-rel-create-v3.dto';
import { TaxonomyRelDeleteV3Dto } from './dto/taxonomy-rel-delete-v3.dto';
import { TaxonomyRelProdutoAllV3Dto } from './dto/taxonomy-rel-produto-all-v3.dto';

@Controller('taxonomy-rel')
export class TaxonomyRelController {
  constructor(private readonly taxonomyRelService: TaxonomyRelService) {}

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
        auth: '/api/tanomy-rel',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-rel-create')
  taxonomyRelCreateV3(@Body() dataJsonDto: TaxonomyRelCreateV3Dto) {
    return this.taxonomyRelService.taskTaxonomyRelCreateV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-rel-produto-all')
  taxonomyRelProdutoAllV3(@Body() dataJsonDto: TaxonomyRelProdutoAllV3Dto) {
    return this.taxonomyRelService.taskTaxonomyRelProdutoAllV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-rel-delete')
  taxonomyRelDeleteV3(@Body() dataJsonDto: TaxonomyRelDeleteV3Dto) {
    return this.taxonomyRelService.taskTaxonomyRelDeleteV3(dataJsonDto);
  }
}
