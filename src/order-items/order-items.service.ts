import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { OrderItemFindAllDto } from './dto/order-item-find-all.dto';
import { OrderItemFindAllQuery } from './query/order-item-find-all.query';
import { processProcedureResultQueryWithoutId } from 'src/core/procedure.result/process-procedure-result.query';

import {
  SpResultOrderItemsFindData,
  TblOrderItemsFind,
} from './types/order-items.type';

@Injectable()
export class OrderItemsService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskOrderItemsFindV2(dataJsonDto: OrderItemFindAllDto) {
    try {
      const queryString = OrderItemFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderItemsFindData;

      return processProcedureResultQueryWithoutId<TblOrderItemsFind>(
        resultData as unknown[],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
