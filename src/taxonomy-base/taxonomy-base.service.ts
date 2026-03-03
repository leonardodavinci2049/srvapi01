import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { DatabaseService } from 'src/database/database.service';

import { TaxonomyCreateV3Dto } from './dto/taxonomy-create-v3.dto';
import { TaxonomyDeleteV3Dto } from './dto/taxonomy-delete-v3.dto';
import { TaxonomyFindAllV3Dto } from './dto/taxonomy-find-all-v3.dto';
import { TaxonomyFindIdV3Dto } from './dto/taxonomy-find-id-v3.dto';
import { TaxonomyFindMenuV3Dto } from './dto/taxonomy-find-menu-v3.dto';
import { TaxonomyUpdateV3Dto } from './dto/taxonomy-update-v3.dto';


@Injectable()
export class TaxonomyBaseService {

    constructor(private readonly dbService: DatabaseService) {}

  create() {
    return 'This action adds a new taxonomyBase';
  }

  async tasktaxonomyCreateV3(dataJsonDto: TaxonomyCreateV3Dto) {}

  async tasktaxonomyDeleteV3(dataJsonDto: TaxonomyDeleteV3Dto) {}

  async tasktaxonomyFindAllV3(dataJsonDto: TaxonomyFindAllV3Dto) {}

  async tasktaxonomyFindIdV3(dataJsonDto: TaxonomyFindIdV3Dto) {}

  async tasktaxonomyFindMenuV3(dataJsonDto: TaxonomyFindMenuV3Dto) {}

  async tasktaxonomyUpdateV3(dataJsonDto: TaxonomyUpdateV3Dto) {}
}
