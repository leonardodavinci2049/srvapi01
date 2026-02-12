import { Injectable } from '@nestjs/common';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { TypeFindAllDto } from './dto/type-find-all.dto';
import { TypeFindAllQuery } from './query/type-find-all.query';
import { SpResultPTypeFindAllData } from './types/ptype.type';
import { TypeCreateV2Dto } from './dto/type-create-v2.dto';
import { TypeFindAllV2Dto } from './dto/type-find-all-v2.dto';
import { TypeFindIdV2Dto } from './dto/type-find-id-v2.dto';
import { TypeUpdateV2Dto } from './dto/type-update-v2.dto';
import { TypeDeleteV2Dto } from './dto/type-delete-v2.dto';

@Injectable()
export class PtypeService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskTypeCreateV2(dataJsonDto: TypeCreateV2Dto) {
    try {
      const queryString = CustomerUpdInlEmailQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update email failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTypeFindAllV2(dataJsonDto: TypeFindAllV2Dto) {
    try {
      const queryString = CostumerFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCustomerFindAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Customer find All'],
        'Customer find Allnot found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async taskTypeFindIdV2(dataJsonDto: TypeFindIdV2Dto) {
    try {
      const queryString = CostumerFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCustomerFindAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Customer find All'],
        'Customer find Allnot found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  
  async taskTypeUpdateV2(dataJsonDto: TypeUpdateV2Dto) {
    try {
      const queryString = CustomerUpdInlEmailQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update email failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTypeDeleteV2(dataJsonDto: TypeDeleteV2Dto) {
    try {
      const queryString = CustomerUpdInlEmailQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update email failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }


  async tskPTypeFindV2(dataJsonDto: TypeFindAllDto) {
    try {
      const queryString = TypeFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultPTypeFindAllData;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_TIPO ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (qtRecords === 0 && errorId === 0) {
        Feedback = 'Product not found';
      }
      return resultQueryData<SpResultPTypeFindAllData>(
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
}
