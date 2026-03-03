import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TaxonomyRelService } from './taxonomy-rel.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

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
  create() {
    return this.taxonomyRelService.create();
  }
}
