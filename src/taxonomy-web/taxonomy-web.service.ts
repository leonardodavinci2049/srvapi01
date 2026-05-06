import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { TaxonomyWebFindIdV3Dto } from './dto/taxonomy-web-find-id-v3.dto';
import {
  SpResultTaxonomyWebFindIdV3Data,
  SpResultTaxonomyWebMenuV3Data,
} from './types/taxonomy-web.type';
import { TaxonomyWebFindIdV3Query } from './query/taxonomy-web-find-id-v3.query';
import { TaxonomyWebFindMenuV3Dto } from './dto/taxonomy-web-find-menu-v3.dto';
import { TaxonomyWebFindMenuV3Query } from './query/taxonomy-web-find-menu-v3.query';

@Injectable()
export class TaxonomyWebService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskTaxonomyWebFindIdV3(dataJsonDto: TaxonomyWebFindIdV3Dto) {
    try {
      const queryString = TaxonomyWebFindIdV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyWebFindIdV3Data;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Taxonomy find Id', 'Taxonomy related'],
        'Taxonomy find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyWebFindMenuV3(dataJsonDto: TaxonomyWebFindMenuV3Dto) {
    try {
      const queryString = TaxonomyWebFindMenuV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyWebMenuV3Data;

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
}
