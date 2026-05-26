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
  SpResultOrderFindBudgetCustomerIdV2Data,
  SpResultOrderFindDashboardCustomerIdV2Data,
  SpResultOrderItemFindQtV2Data,
} from './types/order-b2b.type';

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
      )) as unknown as SpResultOrderFindBudgetCustomerIdV2Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Order Summary', 'Order Details', 'Order Items', 'Customer Details, Seller Details'],
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
      )) as unknown as SpResultOrderFindDashboardCustomerIdV2Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Order Summary', 'Order Details', 'Order Items', 'Customer Details'],
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
      )) as unknown as SpResultOrderItemFindQtV2Data;

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
}
