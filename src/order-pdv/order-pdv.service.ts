import { Injectable } from '@nestjs/common';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { ResultModel } from 'src/core/process-result/result.model';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { DatabaseService } from 'src/database/database.service';
import { OrdersPdvFindAllDto } from './dto/orders-pdv-find-all.dto';
import { OrdersPdvFindIdDto } from './dto/orders-pdv-find-id.dto';
import { OrdersPdvFindAllQuery } from './query/orders-pdv-find-all.query';
import { OrdersPdvFindIdQuery } from './query/orders-pdv-find-id.query';
import {
  SpResultOrdersPdvFindAllData,
  SpResultOrdersPdvFindIdData,
} from './types/order-pdv.type';

@Injectable()
export class OrderPdvService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskOrdersPdvFindAllV2(
    dataJsonDto: OrdersPdvFindAllDto,
  ): Promise<ResultModel> {
    try {
      const { queryString, queryParams } = OrdersPdvFindAllQuery(dataJsonDto);
      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultOrdersPdvFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['ordersFindAll'],
        MESSAGES.SEARCH_NO_RESULTS,
      );
    } catch {
      return new ResultModel(
        RESPONSE_CODES.INTERNAL_ERROR,
        MESSAGES.UNKNOWN_ERROR,
        '0',
        { ordersFindAll: [] },
        0,
        1,
      );
    }
  }

  async taskOrdersPdvFindIdV2(
    dataJsonDto: OrdersPdvFindIdDto,
  ): Promise<ResultModel> {
    try {
      const { queryString, queryParams } = OrdersPdvFindIdQuery(dataJsonDto);
      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultOrdersPdvFindIdData;

      return processProcedureResultMultiQuery(
        resultData,
        [
          'ordersData',
          'ordersItems',
          'ordersStatusHistory',
          'ordersCustomer',
          'ordersSeller',
        ],
        MESSAGES.SEARCH_NO_RESULTS,
      );
    } catch {
      return new ResultModel(
        RESPONSE_CODES.INTERNAL_ERROR,
        MESSAGES.UNKNOWN_ERROR,
        '0',
        {
          ordersData: [],
          ordersItems: [],
          ordersStatusHistory: [],
          ordersCustomer: [],
          ordersSeller: [],
        },
        0,
        1,
      );
    }
  }
}
