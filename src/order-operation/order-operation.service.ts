import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { OrderOperAddItemDto } from './dto/order-oper-add-item.dto';
import { OrderOperCloseIdDto } from './dto/order-oper-close-id.dto';
import { OrderOperCreateDto } from './dto/order-oper-create.dto';
import { OrderOperReverseIdDto } from './dto/order-oper-reverse-id.dto';
import { OrderOperSendingByEmailIdDto } from './dto/order-oper-sending-by-email-id.dto';
import { OrderOperAddItemQuery } from './query/order-oper-add-item.query';
import { OrderOperCloseIdQuery } from './query/order-oper-close-id.query';
import { OrderOperCreateQuery } from './query/order-oper-create.query';
import { OrderOperReverseIdQuery } from './query/order-oper-reverse-id.query';
import { OrderOperSendingByEmailIdQuery } from './query/order-oper-sending-by-email-id.query';
import {
  SpResultOrderOperSendingByEmailData,
  SpResultRecordOperationType,
  SpResultRecordUpdateType,
} from './types/order-operation.type';

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
        resultData,
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
        resultData,
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
        resultData,
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
        resultData,
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
        resultData,
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
