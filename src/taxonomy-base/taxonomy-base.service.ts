import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { ResultModel as ProcedureResultModel } from 'src/core/process-result/result.model';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { SpTaxonomyFindMenuManagerV3Dto } from './dto/sp-taxonomy-find-menu-manager-v3.dto';
import { SpTaxonomyProductManagerV2Dto } from './dto/sp-taxonomy-product-manager-v2.dto';
import { SpTaxonomyRelCreateBulkV3Dto } from './dto/sp-taxonomy-rel-create-Bulk-v3.dto';
import { TaxonomyCreateV3Dto } from './dto/taxonomy-create-v3.dto';
import { TaxonomyDeleteV3Dto } from './dto/taxonomy-delete-v3.dto';
import { TaxonomyFindAllV3Dto } from './dto/taxonomy-find-all-v3.dto';
import { TaxonomyFindIdV3Dto } from './dto/taxonomy-find-id-v3.dto';
import { TaxonomyFindMenuV3Dto } from './dto/taxonomy-find-menu-v3.dto';
import { TaxonomyUpdMetadataV3Dto } from './dto/taxonomy-upd-metadata-v3.dto';
import { TaxonomyUpdateV3Dto } from './dto/taxonomy-update-v3.dto';

import { SpTaxonomyFindMenuManagerV3Query } from './query/sp-taxonomy-find-menu-manager-v3.query';
import { SpTaxonomyProductManagerV2Query } from './query/sp-taxonomy-product-manager-v2.query';
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
  SpResultTaxonomyFindAllV3Data,
  SpResultTaxonomyFindIdV3Data,
  SpResultTaxonomyFindMenuManagerV3Data,
  SpResultTaxonomyFindMenuV3Data,
  SpResultTaxonomyProductManagerV2Data,
  SpResultTaxonomyRelCreateBulkV3Data,
  SpResultTaxonomyWebMenuV3Data,
} from './types/taxonomy-base.type';

@Injectable()
export class TaxonomyBaseService {
  private readonly logger = new Logger(TaxonomyBaseService.name);

  constructor(private readonly dbService: DatabaseService) {}

  private hasCandidatesContract(resultData: unknown[]): boolean {
    return resultData.some(
      (resultSet) =>
        Array.isArray(resultSet) &&
        resultSet.some(
          (row: unknown) =>
            typeof row === 'object' &&
            row !== null &&
            'sp_contract_version' in row &&
            row.sp_contract_version === 1,
        ),
    );
  }

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

  async taskTaxonomyProductManagerV2(
    dataJsonDto: SpTaxonomyProductManagerV2Dto,
  ) {
    const candidates = dataJsonDto.pe_exclude_taxonomy_id != null;
    const term = dataJsonDto.pe_search?.trim() ?? '';
    if (
      candidates &&
      (!Number.isInteger(dataJsonDto.pe_system_client_id) ||
        dataJsonDto.pe_system_client_id < 1 ||
        term.length < 3 ||
        term.length > 200 ||
        dataJsonDto.pe_id_taxonomy !== 0 ||
        dataJsonDto.pe_flag_no_family !== 0 ||
        dataJsonDto.pe_flag_no_group !== 0 ||
        dataJsonDto.pe_flag_no_subgroup !== 0 ||
        !Number.isInteger(dataJsonDto.pe_qt_registros) ||
        dataJsonDto.pe_qt_registros > 50 ||
        !Number.isInteger(dataJsonDto.pe_pagina_id))
    ) {
      throw new BadRequestException(
        'Parâmetros inválidos para a prévia do lote.',
      );
    }
    try {
      const { queryString, queryParams } =
        SpTaxonomyProductManagerV2Query(dataJsonDto);
      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultTaxonomyProductManagerV2Data;
      if (candidates && !this.hasCandidatesContract(resultData)) {
        throw new Error('Candidates procedure contract is unavailable');
      }
      const result = processProcedureResultMultiQuery(
        resultData,
        ['Taxonomy product manager'],
        'Taxonomy product manager not found',
      );
      if (candidates) result.info1 = 'taxonomy-bulk-candidates-v1';
      return result;
    } catch (err) {
      this.logger.error(
        'Failed to load taxonomy products',
        err instanceof Error ? err.message : 'Unknown error',
      );
      return new ProcedureResultModel(
        candidates ? RESPONSE_CODES.INTERNAL_ERROR : RESPONSE_CODES.NOT_FOUND,
        MESSAGES.PROCESSING_FAILURE,
        '0',
        candidates ? {} : [],
        0,
        1,
      );
    }
  }

  async taskTaxonomyFindMenuManagerV3(
    dataJsonDto: SpTaxonomyFindMenuManagerV3Dto,
  ) {
    try {
      const queryString = SpTaxonomyFindMenuManagerV3Query(dataJsonDto);

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
    const candidates = dataJsonDto.pe_eligibility_version === 1;
    const term = dataJsonDto.pe_filter_keyword.trim();
    if (
      candidates &&
      (!Number.isInteger(dataJsonDto.pe_system_client_id) ||
        dataJsonDto.pe_system_client_id < 1 ||
        !Number.isInteger(dataJsonDto.pe_id_taxonomy) ||
        term.length < 3 ||
        term.length > 200 ||
        dataJsonDto.pe_level != null)
    ) {
      throw new BadRequestException(
        'Parâmetros inválidos para vincular produtos em massa.',
      );
    }
    try {
      const { queryString, queryParams } =
        SpTaxonomyRelCreateBulkV3Query(dataJsonDto);
      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultTaxonomyRelCreateBulkV3Data;
      if (candidates && !this.hasCandidatesContract(resultData)) {
        throw new Error('Bulk candidates procedure contract is unavailable');
      }
      const result = processProcedureResultMutation(
        resultData,
        'Taxonomy relationship bulk create failed',
      );
      if (candidates) result.info1 = 'taxonomy-bulk-candidates-v1';
      return result;
    } catch (err) {
      this.logger.error(
        'Failed to create taxonomy bulk links',
        err instanceof Error ? err.message : 'Unknown error',
      );
      return new ProcedureResultModel(
        candidates ? RESPONSE_CODES.INTERNAL_ERROR : RESPONSE_CODES.NOT_FOUND,
        MESSAGES.PROCESSING_FAILURE,
        '0',
        [],
        0,
        1,
      );
    }
  }
}
