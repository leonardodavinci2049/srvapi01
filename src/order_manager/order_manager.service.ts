import { Injectable } from '@nestjs/common';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { OrdersManagerFindAllDto } from './dto/orders-manager-find-all.dto';
import { OrdersManagerFindIdDto } from './dto/orders-manager-find-id.dto';
import { OrdersManagerFindAllQuery } from './query/orders-manager-find-all.query';
import { OrdersManagerFindIdQuery } from './query/orders-manager-find-id.query';
import {
  SpResultOrdersManagerFindAllData,
  SpResultOrdersManagerFindIdData,
} from './types/order-manager.type';

@Injectable()
export class OrderManagerService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskOrdersManagerFindAll(dataJsonDto: OrdersManagerFindAllDto) {
    try {
      const { queryString, queryParams } =
        OrdersManagerFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultOrdersManagerFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['ordersFindAll'],
        'Orders manager find all not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersManagerFindId(dataJsonDto: OrdersManagerFindIdDto) {
    try {
      const { queryString, queryParams } =
        OrdersManagerFindIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultOrdersManagerFindIdData;

      return processProcedureResultMultiQuery(
        resultData,
        [
          'ordersData',
          'ordersItems',
          'ordersStatusHistory',
          'ordersCustomer',
          'ordersSeller',
        ],
        'Orders manager find id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
