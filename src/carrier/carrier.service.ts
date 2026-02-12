import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { CarrierCreateV2Dto } from './dto/carrier-create-v2.dto';
import { CarrierFindAllV2Dto } from './dto/carrier-find-all-v2.dto';
import { CarrierFindIdV2Dto } from './dto/carrier-find-id-v2.dto';
import { CarrierUpdateV2Dto } from './dto/carrier-update-v2.dto';
import { CarrierDeleteV2Dto } from './dto/carrier-delete-v2.dto';
import { CarrierCreateV2Query } from './query/carrier-create-v2.query';
import {
  SpResultPTypeFindAllData,
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultRecordUpdateType,
} from './types/carrier.type';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { CarrierFindAllV2Query } from './query/carrier-find-all-v2.query';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { CarrierFindIdV2Query } from './query/carrier-find-id-v2.query';
import { CarrierUpdateV2Query } from './query/carrier-update-v2.query';
import { CarrierDeleteV2Query } from './query/carrier-delete-v2.query';
@Injectable()
export class CarrierService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new carrier';
  }

  async taskCarrierCreateV2(dataJsonDto: CarrierCreateV2Dto) {
    try {
      const queryString = CarrierCreateV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Carrier create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCarrierFindAllV2(dataJsonDto: CarrierFindAllV2Dto) {
    try {
      const queryString = CarrierFindAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultPTypeFindAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Carrier find All'],
        'Carrier find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCarrierFindIdV2(dataJsonDto: CarrierFindIdV2Dto) {
    try {
      const queryString = CarrierFindIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultPTypeFindAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Carrier find Id'],
        'Carrier find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async taskCarrierUpdateV2(dataJsonDto: CarrierUpdateV2Dto) {
    try {
      const queryString = CarrierUpdateV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Carrier update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCarrierDeleteV2(dataJsonDto: CarrierDeleteV2Dto) {
    try {
      const queryString = CarrierDeleteV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Carrier delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
