import { Injectable } from '@nestjs/common';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { SpResultOrderItemsFindData } from './types/order-items.type';
import { OrderItemFindAllDto } from './dto/order-item-find-all.dto';
import { OrderItemFindAllQuery } from './query/order-item-find-all.query';

@Injectable()
export class OrderItemsService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskOrderItemsFindV2(dataJsonDto: OrderItemFindAllDto) {
    try {
      const queryString = OrderItemFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderItemsFindData;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_MOVIMENTO ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (qtRecords === 0 && errorId === 0) {
        Feedback = 'Product not found';
      }
      return resultQueryData<SpResultOrderItemsFindData>(
        0,
        recordId,
        errorId,
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
}
