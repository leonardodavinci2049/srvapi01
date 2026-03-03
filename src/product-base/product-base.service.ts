import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';

import { DatabaseService } from 'src/database/database.service';

import { ProductCreateV3Dto } from './dto/product-create-v3.dto';
import { ProductFindAllV3Dto } from './dto/product-find-all-v3.dto';
import { ProductFindIdV3Dto } from './dto/product-find-id-v3.dto';

import { ProductCreateV3Query } from './query/product-create-v3.query';
import {
  SpResultProductFindAllV3Data,
  SpResultProductFindIdV3Data,
  SpResultRecordCreateType,
} from './types/product-base.type';
import { ProductFindAllV3Query } from './query/product-find-all-v3.query';
import { ProductFindIdV3Query } from './query/product-find-id-v3.query';

@Injectable()
export class ProductBaseService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new productBase';
  }

  async taskproductCreateV3(dataJsonDto: ProductCreateV3Dto) {
    try {
      const queryString = ProductCreateV3Query(dataJsonDto);

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

  async taskproductFindAllV3(dataJsonDto: ProductFindAllV3Dto) {
    try {
      const queryString = ProductFindAllV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindAllV3Data;

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

  async taskproductFindIdV3(dataJsonDto: ProductFindIdV3Dto) {
    try {
      const queryString = ProductFindIdV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindIdV3Data;

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
}
