import { Injectable } from '@nestjs/common';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { OrderUpdCustomerIdDto } from './dto/order-upd-customer-id.dto';
import { OrderUpdFreteIdDto } from './dto/order-upd-frete-id.dto';
import { OrderUpdPgMethodIdDto } from './dto/order-upd-pg-method-id.dto';
import { OrderUpdSellerIdDto } from './dto/order-upd-seller-id.dto';
import { OrderUpdStatusIdDto } from './dto/order-upd-status-id.dto';
import { OrderUpdNotesIdDto } from './dto/order-upd-notes-id.dto';
import { OrderUpdDiscountIdDto } from './dto/order-upd-discount-id.dto';

import { SpResultRecordUpdateType } from './types/order-upd.type';

import { OrderUpdCustomerIdQuery } from './query/order-upd-customer-id.query';
import { OrderUpdPgMethodIdQuery } from './query/order-upd-pg-method-id.query';
import { OrderUpdSellerIdQuery } from './query/order-upd-seller-id.query';
import { OrderUpdStatusIdQuery } from './query/order-upd-status-id.query';
import { OrderUpdDiscountIdQuery } from './query/order-upd-discount-id.query';
import { OrderUpdFreteIdQuery } from './query/order-upd-frete-id.query';
import { OrderUpdNotesIdQuery } from './query/order-upd-notes-id.query';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';

@Injectable()
export class OrderUpdService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskOrderUpdCustomerIdV2(dataJsonDto: OrderUpdCustomerIdDto) {
    try {
      const queryString = OrderUpdCustomerIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Item update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderUpdDiscountIdV2(dataJsonDto: OrderUpdDiscountIdDto) {
    try {
      const queryString = OrderUpdDiscountIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Item update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderUpdFreteIdV2(dataJsonDto: OrderUpdFreteIdDto) {
    try {
      const queryString = OrderUpdFreteIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Item update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderUpdNotesIdV2(dataJsonDto: OrderUpdNotesIdDto) {
    try {
      const queryString = OrderUpdNotesIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Item update failed',
      );
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
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Item update failed',
      );
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
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Item update failed',
      );
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
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Item update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
