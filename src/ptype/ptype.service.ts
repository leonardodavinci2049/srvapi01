import { Injectable } from '@nestjs/common';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { TypeFindAllDto } from './dto/type-find-all.dto';
import { TypeFindAllQuery } from './query/type-find-all.query';
import { SpResultPTypeFindAllData } from './types/ptype.type';

@Injectable()
export class PtypeService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskPTypeFindV2(dataJsonDto: TypeFindAllDto) {
    try {
      const queryString = TypeFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultPTypeFindAllData;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_TIPO ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (qtRecords === 0 && errorId === 0) {
        Feedback = 'Product not found';
      }
      return resultQueryData<SpResultPTypeFindAllData>(
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
