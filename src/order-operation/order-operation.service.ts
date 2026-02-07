import { Injectable } from '@nestjs/common';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';

import { OrderOperSendingByEmailIdDto } from './dto/order-oper-sending-by-email-id.dto';
import { OrderOperSendingByEmailIdQuery } from './query/order-oper-sending-by-email-id.query';
import { SpResultOrderOperSendingByEmailData } from './types/order-operation.type';

@Injectable()
export class OrderOperationService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskOrderOperSendingByEmailV2(
    dataJsonDto: OrderOperSendingByEmailIdDto,
  ) {
    try {
      const queryString = OrderOperSendingByEmailIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultOrderOperSendingByEmailData;

      return resultData;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
