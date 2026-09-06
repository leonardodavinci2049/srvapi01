import { Injectable } from '@nestjs/common';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { PurchasingFindManagerAllDto } from './dto/purchasing-find-manager-all.dto';
import { PurchasingFindManagerIdDto } from './dto/purchasing-find-manager-id.dto';
import { PurchasingFindManagerAllQuery } from './query/purchasing-find-manager-all.query';
import { PurchasingFindManagerIdQuery } from './query/purchasing-find-manager-id.query';
import {
  SpResultPurchasingFindManagerAllData,
  SpResultPurchasingFindManagerIdData,
} from './types/purchasing.type';

@Injectable()
export class PurchasingService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskPurchasingFindManagerAll(dataJsonDto: PurchasingFindManagerAllDto) {
    try {
      const { queryString, queryParams } =
        PurchasingFindManagerAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultPurchasingFindManagerAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['purchasingFindAll'],
        'Purchasing find manager all not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskPurchasingFindManagerId(dataJsonDto: PurchasingFindManagerIdDto) {
    try {
      const { queryString, queryParams } =
        PurchasingFindManagerIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultPurchasingFindManagerIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['purchasingData', 'purchasingCategories', 'purchasingSuppliers'],
        'Purchasing find manager id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
