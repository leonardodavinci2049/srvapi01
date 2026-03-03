import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { DatabaseService } from 'src/database/database.service';

import { TaxonomyRelCreateV3Dto } from './dto/taxonomy-rel-create-v3.dto';
import { TaxonomyRelDeleteV3Dto } from './dto/taxonomy-rel-delete-v3.dto';
import { TaxonomyRelProdutoAllV3Dto } from './dto/taxonomy-rel-produto-all-v3.dto';


@Injectable()
export class TaxonomyRelService {
  constructor(private readonly dbService: DatabaseService) {}

  create() {
    return 'This action adds a new taxonomyRel';
  }

  async tasktaxonomyRelCreateV3(dataJsonDto: TaxonomyRelCreateV3Dto) {}

  async tasktaxonomyRelDeleteV3(dataJsonDto: TaxonomyRelDeleteV3Dto) {}

  async tasktaxonomyRelProdutoAllV3(dataJsonDto: TaxonomyRelProdutoAllV3Dto) {}
}
