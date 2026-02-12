import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { ProductFindPdvAllV2Dto } from './dto/product-find-pdv-all-v2.dto';
import { ProductFindPdvIdV2Dto } from './dto/product-find-pdv-id-v2.dto';

@Injectable()
export class ProductPdvService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new productPdv';
  }

  async taskProductFindPdvAllV2(dataJsonDto: ProductFindPdvAllV2Dto) {

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
  async taskProductFindPdvIdV2(dataJsonDto: ProductFindPdvIdV2Dto) {
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
}
