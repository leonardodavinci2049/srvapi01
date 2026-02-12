import { Injectable } from '@nestjs/common';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { BrandFindAllDto } from './dto/brand-find-all.dto';
import { BrandFindAllQuery } from './query/brand-find-all.query';
import {
  SpResultBrandFindAllData,
  SpResultRecordCreateType,
  SpResultRecordUpdateType,
} from './types/brand.type';
import { BrandCreateV2Dto } from './dto/brand-create-v2.dto';
import { BrandFindAllV2Dto } from './dto/brand-find-all-v2.dto';
import { BrandFindIdV2Dto } from './dto/brand-find-id-v2.dto';
import { BrandUpdateV2Dto } from './dto/brand-update-v2.dto';
import { BrandDeleteV2Dto } from './dto/brand-delete-v2.dto';
import { BrandCreateV2Query } from './query/brand-create-v2.query';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { BrandFindAllV2Query } from './query/brand-find-all-v2.query';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { BrandFindIdV2Query } from './query/brand-find-id-v2.query';
import { BrandUpdateV2Query } from './query/brand-update-v2.query';
import { BrandDeleteV2Query } from './query/brand-delete-v2.query';

@Injectable()
export class BrandService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskBrandFindV2(dataJsonDto: BrandFindAllDto) {
    try {
      const queryString = BrandFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultBrandFindAllData;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_MARCA ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (qtRecords === 0 && errorId === 0) {
        Feedback = 'Product not found';
      }
      return resultQueryData<SpResultBrandFindAllData>(
        0,
        recordId,
        errorId,
        Feedback,
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskBrandCreateV2(dataJsonDto: BrandCreateV2Dto) {
    try {
      const queryString = BrandCreateV2Query(dataJsonDto);

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

  async taskBrandFindAllV2(dataJsonDto: BrandFindAllV2Dto) {
    try {
      const queryString = BrandFindAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultBrandFindAllData;

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

  async taskBrandFindIdV2(dataJsonDto: BrandFindIdV2Dto) {
    try {
      const queryString = BrandFindIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultBrandFindAllData;

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

  async taskBrandUpdateV2(dataJsonDto: BrandUpdateV2Dto) {
    try {
      const queryString = BrandUpdateV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskBrandDeleteV2(dataJsonDto: BrandDeleteV2Dto) {
    try {
      const queryString = BrandDeleteV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

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
