import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';

import { CartItemAddV1Dto } from './dto/cart-item-add-v1.dto';
import { CartFindIdV1Dto } from './dto/cart-find-id-v1.dto';
import { CartFindQtV1Dto } from './dto/cart-find-qt-v1.dto';
import { CartFindAllV1Dto } from './dto/cart-find-ALL-v1.dto';
import { CartUpdSendToV1Dto } from './dto/cart-upd-send-to-v1.dto';
import { CartItemUpdQtV1Dto } from './dto/cart-item-upd-qt-v1.dto';
import { CartClearAllV1Dto } from './dto/cart-clear-all-v1.dto';
import { CartItemDeleteV1Dto } from './dto/cart-item-delete-v1.dto';
import { CartCloseV1Dto } from './dto/cart-close-v1.dto';
import { CartItemAddV1Query } from './query/cart-item-add-v1.query';

import {
  SpResultCartFindAllData,
  SpResultCartFindIdData,
  SpResultCartFindQtData,
  SpResultCartFindSessionData,
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultRecordUpdateType,
} from './types/cart.type';

import { CartFindIdV1Query } from './query/cart-find-id-v1.query';

import { CartItemUpdQtV1Query } from './query/cart-item-upd-qt-v1.query';
import { CartFindQtV1Query } from './query/cart-find-qt-v1.query';
import { CartFindAllV1Query } from './query/cart-find-ALL-v1.query';
import { CartUpdSendToV1Query } from './query/cart-upd-send-to-v1.query';
import { CartClearAllV1Query } from './query/cart-clear-all-v1.query';
import { CartItemDeleteV1Query } from './query/cart-item-delete-v1.query';
import { CartCloseV1Query } from './query/cart-close-v1.query';
import { CartFindSessionV1Dto } from './dto/cart-find-session-v1.dto';
import { CartFindSessionV1Query } from './query/cart-find-session-v1.query';

@Injectable()
export class CartService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskCartItemAddV1(dataJsonDto: CartItemAddV1Dto) {
    try {
      const queryString = CartItemAddV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(resultData, 'Cart item add failed');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async tskCartFindIdV1(dataJsonDto: CartFindIdV1Dto) {
    try {
      const queryString = CartFindIdV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCartFindIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Cart Details', 'Cart Items'],
        'Cart Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartFindSessionV1(dataJsonDto: CartFindSessionV1Dto) {
    try {
      const queryString = CartFindSessionV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCartFindSessionData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Cart Details', 'Cart Items'],
        'Cart Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartFindQtV1(dataJsonDto: CartFindQtV1Dto) {
    try {
      const queryString = CartFindQtV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCartFindQtData;

      console.log('Debug: Result from CartFindQtV1Query', resultData);

      return processProcedureResultMultiQuery(
        resultData,
        ['Cart Quantity'],
        'Cart Quantity not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async tskCartFindAllV1(dataJsonDto: CartFindAllV1Dto) {
    try {
      const queryString = CartFindAllV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCartFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Cart List'],
        'Cart List not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartUpdSendToV1(dataJsonDto: CartUpdSendToV1Dto) {
    try {
      const queryString = CartUpdSendToV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Cart update field failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartItemUpdQtV1(dataJsonDto: CartItemUpdQtV1Dto) {
    try {
      const queryString = CartItemUpdQtV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Cart item update field failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartClearAllV1(dataJsonDto: CartClearAllV1Dto) {
    try {
      const queryString = CartClearAllV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Cart clear all failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartItemDeleteV1(dataJsonDto: CartItemDeleteV1Dto) {
    try {
      const queryString = CartItemDeleteV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(
        resultData,
        'Cart item delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async tskCartCloseV1(dataJsonDto: CartCloseV1Dto) {
    try {
      const queryString = CartCloseV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(resultData, 'Cart close failed');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
