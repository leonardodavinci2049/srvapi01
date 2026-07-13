import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { ProductFindManagerAllV2Dto } from './dto/product-find-manager-all-v2.dto';
import { ProductFindManagerIdV2Dto } from './dto/product-find-manager-id-v2.dto';
import {
  SpResultProductFindManagerAllData,
  SpResultProductFindManagerIdData,
} from './types/produtct-type.type';
import { ProductFindManagerAllV2Query } from './query/product-find-manager-all-v2.query';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { ProductFindManagerIdV2Query } from './query/product-find-manager-id-v2.query';
import { ProductFindManagerSearchV2Dto } from './dto/product-find-manager-search.dto';
import { ProductFindManagerSearchV2Query } from './query/product-find-manager-search.query';

@Injectable()
export class ProductManagerService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new productManager';
  }

  async taskProductFindManagerAllV2(dataJsonDto: ProductFindManagerAllV2Dto) {
    try {
      const queryString = ProductFindManagerAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindManagerAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product Manager find All'],
        'Product Manager find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductFindManagerSearchV2(
    dataJsonDto: ProductFindManagerSearchV2Dto,
  ) {
    try {
      const queryString = ProductFindManagerSearchV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindManagerAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product Manager find Search'],
        'Product Manager find Search not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductFindManagerIdV2(dataJsonDto: ProductFindManagerIdV2Dto) {
    try {
      const queryString = ProductFindManagerIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindManagerIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product Manager find Id', 'Related Categories', 'Related Products'],
        'Customer find Allnot found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
