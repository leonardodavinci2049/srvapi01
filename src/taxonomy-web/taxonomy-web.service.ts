import { Injectable } from '@nestjs/common';
import { CreateTaxonomyWebDto } from './dto/create-taxonomy-web.dto';
import { UpdateTaxonomyWebDto } from './dto/update-taxonomy-web.dto';

@Injectable()
export class TaxonomyWebService {
  create(createTaxonomyWebDto: CreateTaxonomyWebDto) {
    return 'This action adds a new taxonomyWeb';
  }

  findAll() {
    return `This action returns all taxonomyWeb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxonomyWeb`;
  }

  update(id: number, updateTaxonomyWebDto: UpdateTaxonomyWebDto) {
    return `This action updates a #${id} taxonomyWeb`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxonomyWeb`;
  }
}
