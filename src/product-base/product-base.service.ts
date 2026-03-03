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
  SpResultProductFindBaseAllV3Data,
  SpResultProductFindBaseIdV3Data,
  SpResultProductFindBaseSearchV3Data,
  SpResultRecordCreateType,
} from './types/product-base.type';
import { ProductFindAllV3Query } from './query/product-find-all-v3.query';
import { ProductFindIdV3Query } from './query/product-find-id-v3.query';
import { ProductFindSearchV3Dto } from './dto/product-find-search-v3.dto';
import { ProductFindSearchV3Query } from './query/product-find-serach-v3.query';

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
        'Product create failed',
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
      )) as unknown as SpResultProductFindBaseAllV3Data;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Product find All'],
        'Product find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductSerchAllV3(dataJsonDto: ProductFindSearchV3Dto) {
    try {
      const queryString = ProductFindSearchV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindBaseSearchV3Data;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Product find All'],
        'Product find All not found',
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
      )) as unknown as SpResultProductFindBaseIdV3Data;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        [
          'Product find Id',
          'Product find Id categories',
          'Product find Id related',
        ],
        'Product find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
