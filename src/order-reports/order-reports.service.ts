import { Injectable } from '@nestjs/common';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { OrdersFindCustomerAllDto } from './dto/orders-find-customer-all.dto';
import { OrdersFindCustomerIdDto } from './dto/orders-find-customer-id.dto';

import { OrdersFindSellerAllDto } from './dto/orders-find-seller-all.dto';
import { OrdersFindSellerIdDto } from './dto/orders-find-seller-id.dto';

import {
  SpResultOrderFindCustomerAllData,
  SpResultOrderFindCustomerIdData,
  SpResultOrderFindLatestAllData,
  SpResultOrderFindLatestIdData,
  SpResultOrderFindSaleAllData,
  SpResultOrderFindSaleIdData,
  SpResultOrderFindSellerAllData,
  SpResultOrderFindSellerIdData,
} from './types/order-reports.type';

import { OrdersFindSellerAllQuery } from './query/orders-find-seller-all.query';
import { OrdersFindSellerIdQuery } from './query/orders-find-seller-id.query';

import { OrdersFindCustomerIdQuery } from './query/orders-find-customer-id.query';
import { OrdersFindCustomerAllQuery } from './query/orders-find-customer-all.query';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { OrdersFindLatestIdDto } from './dto/orders-find-latest-id.dto';
import { OrdersFindLatestAllDto } from './dto/orders-find-latest-all.dto';
import { OrdersFindLatestAllQuery } from './query/orders-find-latest-all.query';
import { OrdersFindLatestIdQuery } from './query/orders-find-latest-id.query';
import { OrdersFindSaleAllQuery } from './query/orders-find-sale-all.query';
import { OrdersFindSaleAllDto } from './dto/orders-find-sale-all.dto';
import { OrdersFindSaleIdDto } from './dto/orders-find-sale-id.dto';
import { OrdersFindSaleIdQuery } from './query/orders-find-sale-id.query';

@Injectable()
export class OrderReportsService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskOrdersFindSaleAllV2(dataJsonDto: OrdersFindSaleAllDto) {
    try {
      const queryString = OrdersFindSaleAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderFindSaleAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Orders Sale All'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindSaleIdV2(dataJsonDto: OrdersFindSaleIdDto) {
    try {
      const queryString = OrdersFindSaleIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderFindSaleIdData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        [
          'Order Summary',
          'Order Items',
          'Customer Information',
          'Seller Information',
          'Trading Information',
          'Shipping Information',
        ],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindCustomerAllV2(dataJsonDto: OrdersFindCustomerAllDto) {
    try {
      const queryString = OrdersFindCustomerAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderFindCustomerAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['customer orders'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindCustomerIdV2(dataJsonDto: OrdersFindCustomerIdDto) {
    try {
      const queryString = OrdersFindCustomerIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderFindCustomerIdData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        [
          'Customer Orders Summary',
          'Customer Order Items',
          'Status History',
          'Customer Information',
          'Seller Information',
        ],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindSellerAllV2(dataJsonDto: OrdersFindSellerAllDto) {
    try {
      const queryString = OrdersFindSellerAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderFindSellerAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['seller orders'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindSellerIdV2(dataJsonDto: OrdersFindSellerIdDto) {
    try {
      const queryString = OrdersFindSellerIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderFindSellerIdData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        [
          'Seller Orders Summary',
          'Seller Order Items',
          'Status History',
          'Customer Information',
        ],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindLatestAllV2(dataJsonDto: OrdersFindLatestAllDto) {
    try {
      const queryString = OrdersFindLatestAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderFindLatestAllData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Last orders'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindLatestIdV2(dataJsonDto: OrdersFindLatestIdDto) {
    try {
      const queryString = OrdersFindLatestIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderFindLatestIdData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        [
          'Latest Orders Summary',
          'Latest Order Items',
          'Status History',
          'Customer Information',
          'Seller Information',
        ],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
