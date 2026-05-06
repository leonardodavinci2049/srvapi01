import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { TaxonomyWebService } from './taxonomy-web.service';
import { TaxonomyWebFindIdV3Dto } from './dto/taxonomy-web-find-id-v3.dto';
import { TaxonomyWebFindMenuV3Dto } from './dto/taxonomy-web-find-menu-v3.dto';

@Controller('taxonomy-web')
export class TaxonomyWebController {
  constructor(private readonly taxonomyWebService: TaxonomyWebService) {}


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
        auth: '/api/taxonomy-web',
      },
    };
  }

    @UseGuards(AuthGuard)
  @Post('v3/taxonomy-web-find-id')
  taxonomyWebFindIdV3(@Body() dataJsonDto: TaxonomyWebFindIdV3Dto) {
    return this.taxonomyWebService.taskTaxonomyWebFindIdV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/taxonomy-web-find-menu')
  taxonomyWebFindMenuV3(@Body() dataJsonDto: TaxonomyWebFindMenuV3Dto) {
    return this.taxonomyWebService.taskTaxonomyWebFindMenuV3(dataJsonDto);
  }


}
