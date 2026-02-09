import { Injectable } from '@nestjs/common';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import {
  SpResultOrderOperSendingByEmailData,
  SpResultRecordOperationType,
  SpResultRecordUpdateType,
} from './types/order-operation.type';

import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';

import { OrderOperAddItemQuery } from './query/order-oper-add-item.query';
import { OrderOperReverseIdQuery } from './query/order-oper-reverse-id.query';
import { OrderOperCloseIdQuery } from './query/order-oper-close-id.query';
import { OrderOperCreateQuery } from './query/order-oper-create.query';
import { OrderOperSendingByEmailIdQuery } from './query/order-oper-sending-by-email-id.query';

import { OrderOperAddItemDto } from './dto/order-oper-add-item.dto';
import { OrderOperCloseIdDto } from './dto/order-oper-close-id.dto';
import { OrderOperCreateDto } from './dto/order-oper-create.dto';
import { OrderOperReverseIdDto } from './dto/order-oper-reverse-id.dto';
import { OrderOperSendingByEmailIdDto } from './dto/order-oper-sending-by-email-id.dto';

@Injectable()
export class OrderOperationService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskOrderOperCreateV2(dataJsonDto: OrderOperCreateDto) {
    try {
      const queryString = OrderOperCreateQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderOperAddItemV2(dataJsonDto: OrderOperAddItemDto) {
    try {
      const queryString = OrderOperAddItemQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordOperationType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderOperCloseIdV2(dataJsonDto: OrderOperCloseIdDto) {
    try {
      const queryString = OrderOperCloseIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordOperationType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper close id failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderOperReverseIdV2(dataJsonDto: OrderOperReverseIdDto) {
    try {
      const queryString = OrderOperReverseIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper reverse id failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderOperSendingByEmailV2(
    dataJsonDto: OrderOperSendingByEmailIdDto,
  ) {
    try {
      const queryString = OrderOperSendingByEmailIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderOperSendingByEmailData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['orderSummary', 'orderItems', 'customerDetails', 'sellerDetails'],
        'Order Oper sending by email not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
