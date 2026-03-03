import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TaxonomyBaseService } from './taxonomy-base.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

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
  @Post('v3/taxonomy-base-create')
  create() {
    return this.taxonomyBaseService.create();
  }
}
