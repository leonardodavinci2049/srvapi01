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
import { SpTaxonomyProductManagerV2Dto } from './dto/sp-taxonomy-product-manager-v2.dto';
import { SpTaxonomyFindMenuManagerV3Dto } from './dto/sp-taxonomy-find-menu-manager-v3.dto';
import { SpTaxonomyRelCreateBulkV3Dto } from './dto/sp-taxonomy-rel-create-Bulk-v3.dto';
import { TaxonomyUpdMetadataV3Dto } from './dto/taxonomy-upd-metadata-v3.dto';
import { TaxonomyUpdateV3Dto } from './dto/taxonomy-update-v3.dto';

import { SpTaxonomyFindMenuManagerV3Query } from './query/sp-taxonomy-find-menu-manager-v3.query';
import { SpTaxonomyRelCreateBulkV3Query } from './query/sp-taxonomy-rel-create-Bulk-v3.query';
import { TaxonomyCreateV3Query } from './query/taxonomy-create-v3.query';
import { TaxonomyDeleteV3Query } from './query/taxonomy-delete-v3.query';
import { TaxonomyFindAllV3Query } from './query/taxonomy-find-all-v3.query';
import { TaxonomyFindIdV3Query } from './query/taxonomy-find-id-v3.query';
import { TaxonomyFindMenuV3Query } from './query/taxonomy-find-menu-v3.query';
import { TaxonomyUpdMetadataV3Query } from './query/taxonomy-upd-metadata-v3.query';
import { TaxonomyUpdateV3Query } from './query/taxonomy-update-v3.query';
import {
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultTaxonomyProductManagerV2Data,
  SpResultTaxonomyFindAllV3Data,
  SpResultTaxonomyFindIdV3Data,
  SpResultTaxonomyFindMenuManagerV3Data,
  SpResultTaxonomyFindMenuV3Data,
  SpResultTaxonomyRelCreateBulkV3Data,
  SpResultTaxonomyWebMenuV3Data,
} from './types/taxonomy-base.type';
import { SpTaxonomyProductManagerV2Query } from './query/sp-taxonomy-product-manager-v2.query';

@Injectable()
export class TaxonomyBaseService {
  constructor(private readonly dbService: DatabaseService) {}

  create() {
    return 'This action adds a new taxonomyBase';
  }

  async taskTaxonomyCreateV3(dataJsonDto: TaxonomyCreateV3Dto) {
    try {
      const queryString = TaxonomyCreateV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(
        resultData,
        'Taxonomy create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyFindAllV3(dataJsonDto: TaxonomyFindAllV3Dto) {
    try {
      const queryString = TaxonomyFindAllV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindAllV3Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Taxonomy find All'],
        'Taxonomy find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyFindIdV3(dataJsonDto: TaxonomyFindIdV3Dto) {
    try {
      const queryString = TaxonomyFindIdV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdV3Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Taxonomy find Id', 'Taxonomy related'],
        'Taxonomy find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyFindMenuV3(dataJsonDto: TaxonomyFindMenuV3Dto) {
    try {
      const queryString = TaxonomyFindMenuV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindMenuV3Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Taxonomy find Menu'],
        'Taxonomy find Menu not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyUpdateV3(dataJsonDto: TaxonomyUpdateV3Dto) {
    try {
      const queryString = TaxonomyUpdateV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyWebMenuV3Data;

      return processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyUpdInlMetadataV3(dataJsonDto: TaxonomyUpdMetadataV3Dto) {
    try {
      const queryString = TaxonomyUpdMetadataV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyWebMenuV3Data;

      return processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyDeleteV3(dataJsonDto: TaxonomyDeleteV3Dto) {
    try {
      const queryString = TaxonomyDeleteV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(
        resultData,
        'Taxonomy delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyProductManagerV2(dataJsonDto: SpTaxonomyProductManagerV2Dto) {
    try {
      const queryString = SpTaxonomyProductManagerV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyProductManagerV2Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Taxonomy product manager'],
        'Taxonomy product manager not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyFindMenuManagerV3(
    dataJsonDto: SpTaxonomyFindMenuManagerV3Dto,
  ) {
    try {
      const queryString = SpTaxonomyFindMenuManagerV3Query(dataJsonDto);

      console.log('Query TaxonomyFindMenuV3Query: ', queryString);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindMenuManagerV3Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Taxonomy find menu manager', 'Taxonomy quantity'],
        'Taxonomy find menu manager not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyRelCreateBulkV3(dataJsonDto: SpTaxonomyRelCreateBulkV3Dto) {
    try {
      const queryString = SpTaxonomyRelCreateBulkV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyRelCreateBulkV3Data;

      return processProcedureResultMutation(
        resultData,
        'Taxonomy relationship bulk create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
