import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { OrderItemFindAllDto } from './dto/order-item-find-all.dto';
import { OrderItemFindAllQuery } from './query/order-item-find-all.query';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';

import {
  SpResultOrderItemsFindData,
  SpResultOrderItemsFindIdData,
  SpResultRecordDeleteType,
  SpResultRecordUpdateType,
} from './types/order-items.type';
import { OrderItemFindIdQuery } from './query/order-item-find-id.query';
import { OrderItemFindIdDto } from './dto/order-item-find-id.dto';

import { OrderItemUpdDiscountAdmDto } from './dto/order-item-upd-discount-adm.dto';
import { OrderItemUpdDiscountDto } from './dto/order-item-upd-discount.dto';
import { OrderItemDeleteDto } from './dto/order-item-delete.dto';

import { OrderItemUpdQtDto } from './dto/order-item-upd-qt.dto';
import { OrderItemUpdInsuranceVlDto } from './dto/order-item-upd-insurance-vl.dto';
import { OrderItemUpdNotesDto } from './dto/order-item-upd-notes.dto';
import { OrderItemUpdValueDto } from './dto/order-item-upd-value.dto';

import { OrderItemDeleteQuery } from './query/order-item-delete.query';
import { OrderItemUpdValueQuery } from './query/order-item-upd-value.query';
import { OrderItemUpdQtQuery } from './query/order-item-upd-qt.query';
import { OrderItemUpdNotesQuery } from './query/order-item-upd-notes.query';
import { OrderItemUpdInsuranceVlQuery } from './query/order-item-upd-insurance-vl.query';
import { OrderItemUpdFreteVlQuery } from './query/order-item-upd-frete-vl.query';
import { OrderItemUpdDiscountQuery } from './query/order-item-upd-discount.query';

import { OrderItemUpdDiscountAdmQuery } from './query/order-item-upd-discount-adm.query';
import { OrderItemUpdFreteVlDto } from './dto/order-item-upd-frete-vl.dto';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';

@Injectable()
export class OrderItemsService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskOrderItemsFindIdV2(dataJsonDto: OrderItemFindIdDto) {
    try {
      const queryString = OrderItemFindIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderItemsFindIdData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['orderItem'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskOrderItemsFindAllV2(dataJsonDto: OrderItemFindAllDto) {
    try {
      const queryString = OrderItemFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderItemsFindData;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['orderItems'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskorderItemUpdDiscountAdmV2(dataJsonDto: OrderItemUpdDiscountAdmDto) {
    try {
      const queryString = OrderItemUpdDiscountAdmQuery(dataJsonDto);

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

  async tskorderItemUpdDiscountV2(dataJsonDto: OrderItemUpdDiscountDto) {
    try {
      const queryString = OrderItemUpdDiscountQuery(dataJsonDto);

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

  async tskorderItemUpdFreteVlV2(dataJsonDto: OrderItemUpdFreteVlDto) {
    try {
      const queryString = OrderItemUpdFreteVlQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Item frete vl update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskorderItemUpdInsuranceV2(dataJsonDto: OrderItemUpdInsuranceVlDto) {
    try {
      const queryString = OrderItemUpdInsuranceVlQuery(dataJsonDto);

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

  async tskorderItemUpdNotesV2(dataJsonDto: OrderItemUpdNotesDto) {
    try {
      const queryString = OrderItemUpdNotesQuery(dataJsonDto);

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

  async tskorderItemUpdQtV2(dataJsonDto: OrderItemUpdQtDto) {
    try {
      const queryString = OrderItemUpdQtQuery(dataJsonDto);

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

  async tskorderItemUpdValueV2(dataJsonDto: OrderItemUpdValueDto) {
    try {
      const queryString = OrderItemUpdValueQuery(dataJsonDto);

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

  async tskorderItemDeleteV2(dataJsonDto: OrderItemDeleteDto) {
    try {
      const queryString = OrderItemDeleteQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Item delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
