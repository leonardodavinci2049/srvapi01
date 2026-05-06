import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxonomyWebService } from './taxonomy-web.service';
import { CreateTaxonomyWebDto } from './dto/create-taxonomy-web.dto';
import { UpdateTaxonomyWebDto } from './dto/update-taxonomy-web.dto';

@Controller('taxonomy-web')
export class TaxonomyWebController {
  constructor(private readonly taxonomyWebService: TaxonomyWebService) {}

  @Post()
  create(@Body() createTaxonomyWebDto: CreateTaxonomyWebDto) {
    return this.taxonomyWebService.create(createTaxonomyWebDto);
  }

  @Get()
  findAll() {
    return this.taxonomyWebService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxonomyWebService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxonomyWebDto: UpdateTaxonomyWebDto) {
    return this.taxonomyWebService.update(+id, updateTaxonomyWebDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxonomyWebService.remove(+id);
  }
}
