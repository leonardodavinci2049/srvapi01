import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { DatabaseService } from 'src/database/database.service';

import { TaxonomyRelCreateV3Dto } from './dto/taxonomy-rel-create-v3.dto';
import { TaxonomyRelDeleteV3Dto } from './dto/taxonomy-rel-delete-v3.dto';
import { TaxonomyRelProdutoAllV3Dto } from './dto/taxonomy-rel-produto-all-v3.dto';
import { TaxonomyRelCreateV3Query } from './query/taxonomy-rel-create-v3.query';
import {
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultTaxonomyRelProdutoV3Data,
} from './types/taxonomy-rel.type';
import { TaxonomyRelProdutoAllV3Query } from './query/taxonomy-rel-produto-all-v3.query';
import { TaxonomyRelDeleteV3Query } from './query/taxonomy-rel-delete-v3.query';

@Injectable()
export class TaxonomyRelService {
  constructor(private readonly dbService: DatabaseService) {}

  create() {
    return 'This action adds a new taxonomyRel';
  }

  async tasktaxonomyRelCreateV3(dataJsonDto: TaxonomyRelCreateV3Dto) {
    try {
      const queryString = TaxonomyRelCreateV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tasktaxonomyRelProdutoAllV3(dataJsonDto: TaxonomyRelProdutoAllV3Dto) {
    try {
      const queryString = TaxonomyRelProdutoAllV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyRelProdutoV3Data;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Brand find All'],
        'Brand find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tasktaxonomyRelDeleteV3(dataJsonDto: TaxonomyRelDeleteV3Dto) {
    try {
      const queryString = TaxonomyRelDeleteV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
