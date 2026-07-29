import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { SellerFindManagerAllV2Dto } from './dto/seller-find-manager-all-v2.dto';
import { SellerFindManagerAllV2Query } from './query/seller-find-manager-all-v2.query';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { SpResultSellerFindManagerAllData } from './types/seller.type';

@Injectable()
export class SellerService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskSellerFindManagerAllV2(dataJsonDto: SellerFindManagerAllV2Dto) {
    try {
      const queryString = SellerFindManagerAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultSellerFindManagerAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Seller find manager All'],
        'Seller find manager All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
