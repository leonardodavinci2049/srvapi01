import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import {
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultRecordUpdateType,
  SpResultSupplierFindAllData,
  SpResultSupplierFindIdData,
} from './types/supplier.type';

import { DatabaseService } from 'src/database/database.service';
import { SupplierCreateV2Dto } from './dto/supplier-create-v2.dto';
import { SupplierRelCreateV2Dto } from './dto/supplier-rel-create-v2.dto';
import { SupplierFindAllV2Dto } from './dto/supplier-find-all-v2.dto';
import { SupplierRelFindProdAllV2Dto } from './dto/supplier-rel-find-prod-all-v2.dto';
import { SupplierFindIdV2Dto } from './dto/supplier-find-id-v2.dto';
import { SupplierUpdateV2Dto } from './dto/supplier-update-v2.dto';
import { SupplierRelDeleteV2Dto } from './dto/supplier-rel-delete-v2.dto';
import { SupplierCreateV2Query } from './query/supplier-create-v2.query';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { SupplierRelCreateV2Query } from './query/supplier-rel-create-v2.query';
import { SupplierFindAllV2Query } from './query/supplier-find-all-v2.query';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { SupplierRelFindProdAllV2Query } from './query/supplier-rel-find-prod-all-v2.query';
import { SupplierFindIdV2Query } from './query/supplier-find-id-v2.query';
import { SupplierUpdateV2Query } from './query/supplier-update-v2.query';
import { SupplierRelDeleteV2Query } from './query/supplier-rel-delete-v2.query';
import { SupplierDeleteV2Query } from './query/supplier-delete-v2.query';
import { SupplierDeleteV2Dto } from './dto/supplier-delete-v2.dto';

@Injectable()
export class SupplierService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskSupplierCreateV2(dataJsonDto: SupplierCreateV2Dto) {
    try {
      const queryString = SupplierCreateV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Supplier create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskSupplierRelCreateV2(dataJsonDto: SupplierRelCreateV2Dto) {
    try {
      const queryString = SupplierRelCreateV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Supplier relationship create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskSupplierFindAllV2(dataJsonDto: SupplierFindAllV2Dto) {
    try {
      const queryString = SupplierFindAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultSupplierFindAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Supplier find All'],
        'Supplier find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskSupplierRelFindProdAllV2(dataJsonDto: SupplierRelFindProdAllV2Dto) {
    try {
      const queryString = SupplierRelFindProdAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultSupplierFindAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Supplier relationship find All'],
        'Customer find Allnot found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskSupplierFindIdV2(dataJsonDto: SupplierFindIdV2Dto) {
    try {
      const queryString = SupplierFindIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultSupplierFindIdData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Supplier find Id'],
        'Supplier find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskSupplierUpdateV2(dataJsonDto: SupplierUpdateV2Dto) {
    try {
      const queryString = SupplierUpdateV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Supplier update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskSupplierRelDeleteV2(dataJsonDto: SupplierRelDeleteV2Dto) {
    try {
      const queryString = SupplierRelDeleteV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Supplier relationship delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskSupplierDeleteV2(dataJsonDto: SupplierDeleteV2Dto) {
    try {
      const queryString = SupplierDeleteV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Supplier delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
