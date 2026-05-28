import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';

import { OrderFindBudgetCustomerIdV2Dto } from './dto/order-find-budget-customer-id-v2.dto';
import { OrderFindDashboardCustomerIdV2Dto } from './dto/order-find-dashboard-customer-id-v2.dto';
import { OrderItemFindQtV2Dto } from './dto/order-item-find-qt-v2.dto';

import { OrderFindBudgetCustomerIdV2Query } from './query/order-find-budget-customer-id-v2.query';
import { OrderFindDashboardCustomerIdV2Query } from './query/order-find-dashboard-customer-id-v2.query';

import { OrderItemFindQtV2Query } from './query/order-item-find-qt-v2.query';

import {
  ResultOrderFindBudgetCustomerIdV2Data,
  ResultOrderFindDashboardCustomerIdV2Data,
  ResultOrderItemFindQtV2Data,
  ResultOrdersFindLatestV2Data,
  ResultOrdersStatisticsCustomerV2Data,
} from './types/order-b2b.type';

import { OrdersFindLatestV2Dto } from './dto/orders-find-latest-v2.dto';
import { OrdersStatisticsCustomerV2Dto } from './dto/orders-statistics-customer-v2.dto';

import { ordersFindLatestV2Query } from './query/orders-find-latest-v2.query';
import { ordersStatisticsCustomerV2Query } from './query/orders-statistics-customer-v2.query';

@Injectable()
export class OrderB2bService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskOrderFindBudgetCustomerIdV2(
    dataJsonDto: OrderFindBudgetCustomerIdV2Dto,
  ) {
    try {
      const queryString = OrderFindBudgetCustomerIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as ResultOrderFindBudgetCustomerIdV2Data;

      return processProcedureResultMultiQuery(
        resultData,
        [
          'Order Summary',
          'Order Details',
          'Order Items',
          'Customer Details',
          'Seller Details',
        ],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindDashboardCustomerIdV2(
    dataJsonDto: OrderFindDashboardCustomerIdV2Dto,
  ) {
    try {
      const queryString = OrderFindDashboardCustomerIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as ResultOrderFindDashboardCustomerIdV2Data;

      return processProcedureResultMultiQuery(
        resultData,
        [
          'Order Summary',
          'Order Details',
          'Order Items',
          'Customer Details',
          'Seller Details',
        ],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderItemFindQtV2(dataJsonDto: OrderItemFindQtV2Dto) {
    try {
      const queryString = OrderItemFindQtV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as ResultOrderItemFindQtV2Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Qt Items'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }


  async taskOrdersFindLatestV2(dataJsonDto: OrdersFindLatestV2Dto) {
    try {
      const queryString = ordersFindLatestV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as ResultOrdersFindLatestV2Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Orders Find Latest'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }



  async taskOrdersStatisticsCustomerV2(dataJsonDto: OrdersStatisticsCustomerV2Dto) {
    try {
      const queryString = ordersStatisticsCustomerV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as ResultOrdersStatisticsCustomerV2Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Orders Statistics Customer'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }




}
