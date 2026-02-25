import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { ProductFindPdvAllV2Dto } from './dto/product-find-pdv-all-v2.dto';
import { ProductFindPdvIdV2Dto } from './dto/product-find-pdv-id-v2.dto';
import {
  SpResultProductFindPdvAllData,
  SpResultProductFindPdvIdData,
} from './types/produtct-type.type';
import { ProductFindPdvAllV2Query } from './query/product-find-pdv-all-v2.query';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { ProductFindPdvIdV2Query } from './query/product-find-pdv-id-v2.query';
import { ProductFindPdvSearchV2Dto } from './dto/product-find-Pdv-search.dto';
import { ProductFindPdvSearchV2Query } from './query/product-find-Pdv-search.query';

@Injectable()
export class ProductPdvService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new productPdv';
  }

  async taskProductFindPdvAllV2(dataJsonDto: ProductFindPdvAllV2Dto) {
    try {
      const queryString = ProductFindPdvAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindPdvAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Product Pdv find All'],
        'Product Pdv find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductFindPdvSearchV2(dataJsonDto: ProductFindPdvSearchV2Dto) {
    try {
      const queryString = ProductFindPdvSearchV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindPdvAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Product Pdv find Search', ],
        'Product Pdv find Search not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }






  async taskProductFindPdvIdV2(dataJsonDto: ProductFindPdvIdV2Dto) {
    try {
      const queryString = ProductFindPdvIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindPdvIdData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Product Pdv find Id', 'Related Categories', 'Related Products'],
        'Customer find Allnot found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
