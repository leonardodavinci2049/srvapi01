import { Injectable } from '@nestjs/common';
import { TaxonomyRelCreateV3Dto } from './dto/taxonomy-rel-create-v3.dto';
import { TaxonomyRelDeleteV3Dto } from './dto/taxonomy-rel-delete-v3.dto';
import { TaxonomyRelProdutoAllV3Dto } from './dto/taxonomy-rel-produto-all-v3.dto';

@Injectable()
export class TaxonomyRelService {
  create() {
    return 'This action adds a new taxonomyRel';
  }

  async tasktaxonomyRelCreateV3(dataJsonDto: TaxonomyRelCreateV3Dto) {}

  async tasktaxonomyRelDeleteV3(dataJsonDto: TaxonomyRelDeleteV3Dto) {}

  async tasktaxonomyRelProdutoAllV3(dataJsonDto: TaxonomyRelProdutoAllV3Dto) {}
}
