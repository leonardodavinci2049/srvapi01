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
import { TaxonomyCreateV3Query } from './query/taxonomy-create-v3.query';
import {
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultTaxonomyFindAllV3Data,
  SpResultTaxonomyFindIdV3Data,
  SpResultTaxonomyFindMenuV3Data,
  SpResultTaxonomyWebMenuV3Data,
} from './types/taxonomy-base.type';
import { TaxonomyFindAllV3Query } from './query/taxonomy-find-all-v3.query';
import { TaxonomyFindIdV3Query } from './query/taxonomy-find-id-v3.query';
import { TaxonomyFindMenuV3Query } from './query/taxonomy-find-menu-v3.query';
import { TaxonomyUpdateV3Query } from './query/taxonomy-update-v3.query';
import { TaxonomyDeleteV3Query } from './query/taxonomy-delete-v3.query';

@Injectable()
export class TaxonomyBaseService {
  constructor(private readonly dbService: DatabaseService) {}

  create() {
    return 'This action adds a new taxonomyBase';
  }

  async tasktaxonomyCreateV3(dataJsonDto: TaxonomyCreateV3Dto) {
    try {
      const queryString = TaxonomyCreateV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Taxonomy create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tasktaxonomyFindAllV3(dataJsonDto: TaxonomyFindAllV3Dto) {
    try {
      const queryString = TaxonomyFindAllV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindAllV3Data;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Taxonomy find All'],
        'Taxonomy find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tasktaxonomyFindIdV3(dataJsonDto: TaxonomyFindIdV3Dto) {
    try {
      const queryString = TaxonomyFindIdV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdV3Data;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Taxonomy find Id'],
        'Taxonomy find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tasktaxonomyFindMenuV3(dataJsonDto: TaxonomyFindMenuV3Dto) {
    try {
      const queryString = TaxonomyFindMenuV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindMenuV3Data;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Taxonomy find Menu'],
        'Taxonomy find Menu not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tasktaxonomyUpdateV3(dataJsonDto: TaxonomyUpdateV3Dto) {
    try {
      const queryString = TaxonomyUpdateV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyWebMenuV3Data;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Taxonomy update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tasktaxonomyDeleteV3(dataJsonDto: TaxonomyDeleteV3Dto) {
    try {
      const queryString = TaxonomyDeleteV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Taxonomy delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
