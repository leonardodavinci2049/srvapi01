import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { processSqlResultQuery } from 'src/core/process-result/process-sql-result.query';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { CarrierCreateV2Dto } from './dto/carrier-create-v2.dto';
import { CarrierDeleteV2Dto } from './dto/carrier-delete-v2.dto';
import { CarrierFindAllV2Dto } from './dto/carrier-find-all-v2.dto';
import { CarrierFindIdV2Dto } from './dto/carrier-find-id-v2.dto';
import { CarrierFindManagerAllV2Dto } from './dto/carrier-find-manager-all-v2.dto';
import { CarrierFindManagerIdV2Dto } from './dto/carrier-find-manager-id-v2.dto';
import { CarrierFindSearchV2Dto } from './dto/carrier-find-search-v2.dto';
import { CarrierUpdateV2Dto } from './dto/carrier-update-v2.dto';
import { CarrierCreateV2Query } from './query/carrier-create-v2.query';
import { CarrierDeleteV2Query } from './query/carrier-delete-v2.query';
import { CarrierFindAllV2Query } from './query/carrier-find-all-v2.query';
import { CarrierFindIdV2Query } from './query/carrier-find-id-v2.query';
import { CarrierFindManagerAllV2Query } from './query/carrier-find-manager-all-v2.query';
import { CarrierFindManagerIdV2Query } from './query/carrier-find-manager-id-v2.query';
import { CarrierFindSearchV2Query } from './query/carrier-find-search-v2.query';
import { CarrierUpdateV2Query } from './query/carrier-update-v2.query';
import {
  SpResultCarrierFindAllData,
  SpResultCarrierFindIdData,
  SpResultCarrierFindManagerAllData,
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultRecordUpdateType,
  TblCarrierFindManagerId,
  TblCarrierFindSearch,
} from './types/carrier.type';

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
        resultData,
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
      )) as unknown as SpResultCarrierFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Carrier find All'],
        'Carrier find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCarrierSearchAllV2(dataJsonDto: CarrierFindSearchV2Dto) {
    try {
      const { queryString, queryParams } =
        CarrierFindSearchV2Query(dataJsonDto);

      const resultData =
        await this.dbService.selectExecute<TblCarrierFindSearch>(
          queryString,
          queryParams,
        );

      return processSqlResultQuery(
        resultData,
        'Carrier find All',
        'Carrier find All not found',
        'Dados carregados com sucesso.',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCarrierFindManagerAllV2(dataJsonDto: CarrierFindManagerAllV2Dto) {
    try {
      const queryString = CarrierFindManagerAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCarrierFindManagerAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Carrier find manager All'],
        'Carrier find manager All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCarrierFindManagerIdV2(dataJsonDto: CarrierFindManagerIdV2Dto) {
    try {
      const { queryString, queryParams } =
        CarrierFindManagerIdV2Query(dataJsonDto);

      const resultData =
        await this.dbService.selectExecute<TblCarrierFindManagerId>(
          queryString,
          queryParams,
        );

      return processSqlResultQuery(
        resultData,
        'Carrier find manager Id',
        'Carrier find manager Id not found',
        'Dados carregados com sucesso.',
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
      )) as unknown as SpResultCarrierFindIdData;

      return processProcedureResultMultiQuery(
        resultData,
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
        resultData,
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
        resultData,
        'Carrier delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
