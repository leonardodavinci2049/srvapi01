import { Injectable } from '@nestjs/common';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { OrdersFindAllDto } from './dto/orders-find-all.dto';
import { OrdersFindCustomerAllDto } from './dto/orders-find-customer-all.dto';
import { OrdersFindCustomerIdDto } from './dto/orders-find-customer-id.dto';
import { OrdersFindIdDto } from './dto/orders-find-id.dto';
import { OrdersFindSellerAllDto } from './dto/orders-find-seller-all.dto';
import { OrdersFindSellerIdDto } from './dto/orders-find-seller-id.dto';
import { OrdersFindLatestDto } from './dto/orders-find-latest.dto';

import { SpResultTaxonomyFindIdData } from './types/order-reports.type';

import { OrdersFindAllQuery } from './query/orders-find-all.query';
import { OrdersFindIdQuery } from './query/orders-find-id.query';
import { OrdersFindSellerAllQuery } from './query/orders-find-seller-all.query';
import { OrdersFindSellerIdQuery } from './query/orders-find-seller-id.query';
import { OrdersFindLatestQuery } from './query/orders-find-latest.query';
import { OrdersFindCustomerIdQuery } from './query/orders-find-customer-id.query';
import { OrdersFindCustomerAllQuery } from './query/orders-find-customer-all.query';

@Injectable()
export class OrderReportsService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskOrdersFindAllV2(dataJsonDto: OrdersFindAllDto) {
    try {
      const queryString = OrdersFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
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
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
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
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindIdQueryV2(dataJsonDto: OrdersFindIdDto) {
    try {
      const queryString = OrdersFindIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindLatestV2(dataJsonDto: OrdersFindLatestDto) {
    try {
      const queryString = OrdersFindLatestQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
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
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
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
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
