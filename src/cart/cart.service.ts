import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import {
  SpCartCheckCustomerType,
  SpCartClearAllV1Type,
  SpCartItemAddV1Type,
  SpCartItemDeleteV1Type,
  SpCartItemQtUpdateV1Type,
  SpCartItemsSelectV1Type,
  SpCartOrderCreateV1Type,
  SpCartQuantityItemsV1Type,
  SpCartViewCustomerV1Type,
} from './types/cart.type';
import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';

import { FindCartItemsDto } from './dto/find-cart_items.dto';
import { UpdateCartQtItemDto } from './dto/update-cart-qt-item.dto';
import { DeleteCartItemDto } from './dto/delete-cart-item.dto';
import { CreateCartOrderDto } from './dto/create-cart-order.dto';
import { CartQuantityItemsDto } from './dto/cart-quantity-items.dto';
import { CartViewCustomerDto } from './dto/cart-view-customer.dto';
import { CartClearAllDto } from './dto/cart-clear-all.dto';
import { CreateCartItemAddDto } from './dto/create-cart-item-Add.dto';

import { FindCartItemsQuery } from './query/find-cart_items.query';
import { UpdateCartQtItemQuery } from './query/update-cart-qt-item.query';
import { DeleteCartItemQuery } from './query/delete-cart-item.query';
import { CartViewCustomerQuery } from './query/cart-view-customer.query';
import { CreateCartOrderQuery } from './query/create-cart-order.query';
import { CreateCartItemAddQuery } from './query/create-cart-item-add.query';
import { CartQuantityItemsQuery } from './query/cart-quantity-items.query';
import { CartClearAllQuery } from './query/cart-clear-all.query';
import { CartCheckCustomerQuery } from './query/cart-check-customer.query';
import { CartCheckCustomerDto } from './dto/cart-check-customer.dto';

@Injectable()
export class CartService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskCartItemAddV1(dataJsonDto: CreateCartItemAddDto) {
    try {
      const queryString = CreateCartItemAddQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCartItemAddV1Type;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CARRINHO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpCartItemAddV1Type>(
        0,
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartItemSelectV1(dataJsonDto: FindCartItemsDto) {
    try {
      const queryString = FindCartItemsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCartItemsSelectV1Type;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CARRINHO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpCartItemsSelectV1Type>(
        0,
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartItemQtUpdateV1(dataJsonDto: UpdateCartQtItemDto) {
    try {
      const queryString = UpdateCartQtItemQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCartItemQtUpdateV1Type;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CARRINHO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpCartItemQtUpdateV1Type>(
        0,
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartItemDeleteV1(dataJsonDto: DeleteCartItemDto) {
    try {
      const queryString = DeleteCartItemQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCartItemDeleteV1Type;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CARRINHO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      return resultQueryData<SpCartItemDeleteV1Type>(
        0,
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartQuantityItemsV1(dataJsonDto: CartQuantityItemsDto) {
    try {
      const queryString = CartQuantityItemsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCartQuantityItemsV1Type;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.QT_ITEMS ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      return resultQueryData<SpCartQuantityItemsV1Type>(
        0,
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartClearAllV1(dataJsonDto: CartClearAllDto) {
    try {
      const queryString = CartClearAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCartClearAllV1Type;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CARRINHO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      return resultQueryData<SpCartClearAllV1Type>(
        0,
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartCheckCustomerV1(dataJsonDto: CartCheckCustomerDto) {
    try {
      const queryString = CartCheckCustomerQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCartCheckCustomerType;

      const tblRecords = resultData[0];
      const DefaultFeedback = resultData[1];
      const qtRecords: number = tblRecords.length;

      const recordId: number = DefaultFeedback[0]?.pl_id_cadastro ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.pl_feedback || '';
      return resultQueryData<SpCartCheckCustomerType>(
        0,
        recordId,
        0,
        Feedback,
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartViewCustomerV1(dataJsonDto: CartViewCustomerDto) {
    try {
      const queryString = CartViewCustomerQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCartViewCustomerV1Type;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CARRINHO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpCartViewCustomerV1Type>(
        0,
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskCartOrderCreateV1(dataJsonDto: CreateCartOrderDto) {
    try {
      const queryString = CreateCartOrderQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCartOrderCreateV1Type;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_PEDIDO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      return resultQueryData<SpCartOrderCreateV1Type>(
        0,
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
