import { Injectable } from '@nestjs/common';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { processSqlResultQuery } from 'src/core/process-result/process-sql-result.query';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { SellerFindIdDto } from './dto/seller-find-id.dto';
import { SellerFindManagerAllV2Dto } from './dto/seller-find-manager-all-v2.dto';
import { SellerFindSearchV2Dto } from './dto/seller-find-search-v2.dto';
import { SellerFindIdQuery } from './query/seller-find-id.query';
import { SellerFindManagerAllV2Query } from './query/seller-find-manager-all-v2.query';
import { SellerFindSearchV2Query } from './query/seller-find-search-v2.query';
import {
  SpResultSellerFindManagerAllData,
  TblSellerFindId,
  TblSellerFindSearch,
} from './types/seller.type';

@Injectable()
export class SellerService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskSellerSearchAllV2(dataJsonDto: SellerFindSearchV2Dto) {
    try {
      const { queryString, queryParams } = SellerFindSearchV2Query(dataJsonDto);

      const resultData =
        await this.dbService.selectExecute<TblSellerFindSearch>(
          queryString,
          queryParams,
        );

      return processSqlResultQuery(
        resultData,
        'Seller find All',
        'Seller find All not found',
        'Dados carregados com sucesso.',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskSellerFindIdV2(dataJsonDto: SellerFindIdDto) {
    try {
      const queryString = SellerFindIdQuery(dataJsonDto);

      const resultData =
        await this.dbService.selectExecute<TblSellerFindId>(queryString);

      return processSqlResultQuery(
        resultData,
        'Seller find ID',
        'Seller find ID not found',
        'Dados carregados com sucesso.',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

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
