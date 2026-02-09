import { Injectable } from '@nestjs/common';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { OrderUpdCustomerIdDto } from './dto/order-upd-customer-id.dto';
import { OrderUpdDiscountDto } from './dto/order-upd-discount.dto';
import { OrderUpdFreteDto } from './dto/order-upd-frete.dto';
import { OrderUpdNotesDto } from './dto/order-upd-notes.dto';
import { OrderUpdPgMethodIdDto } from './dto/order-upd-pg-method-id.dto';
import { OrderUpdSellerIdDto } from './dto/order-upd-seller-id.dto';
import { OrderUpdStatusIdDto } from './dto/order-upd-status-id.dto';
import { SpResultTaxonomyFindIdData } from './types/order-upd.type';

import { OrderUpdCustomerIdQuery } from './query/order-upd-customer-id.query';
import { OrderUpdFreteQuery } from './query/order-upd-frete.query';

import { OrderUpdNotesQuery } from './query/order-upd-notes.query';
import { OrderUpdPgMethodIdQuery } from './query/order-upd-pg-method-id.query';
import { OrderUpdSellerIdQuery } from './query/order-upd-seller-id.query';
import { OrderUpdStatusIdQuery } from './query/order-upd-status-id.query';
import { OrderUpdDiscountQuery } from './query/order-upd-discount.query';
@Injectable()
export class OrderUpdService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskOrderUpdCustomerIdV2(dataJsonDto: OrderUpdCustomerIdDto) {
    try {
      const queryString = OrderUpdCustomerIdQuery(dataJsonDto);

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

  async taskOrderUpdDiscountV2(dataJsonDto: OrderUpdDiscountDto) {
    try {
      const queryString = OrderUpdDiscountQuery(dataJsonDto);

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

  async taskOrderUpdFreteV2(dataJsonDto: OrderUpdFreteDto) {
    try {
      const queryString = OrderUpdFreteQuery(dataJsonDto);

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

  async taskOrderUpdNotesV2(dataJsonDto: OrderUpdNotesDto) {
    try {
      const queryString = OrderUpdNotesQuery(dataJsonDto);

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

  async taskOrderUpdPgMethodIdV2(dataJsonDto: OrderUpdPgMethodIdDto) {
    try {
      const queryString = OrderUpdPgMethodIdQuery(dataJsonDto);

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

  async taskOrderUpdSellerIdV2(dataJsonDto: OrderUpdSellerIdDto) {
    try {
      const queryString = OrderUpdSellerIdQuery(dataJsonDto);

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

  async taskOrderUpdStatusIdV2(dataJsonDto: OrderUpdStatusIdDto) {
    try {
      const queryString = OrderUpdStatusIdQuery(dataJsonDto);

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
