import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { GeneralUpdProcedureV1Dto } from './dto/general-upd-procedure-v1.dto';
import { generalUpdProcedureV1Query } from './query/general-upd-procedure-v1.query';
import { SpResultRecordUpdateType } from './types/general-call.type';

@Injectable()
export class GeneralCallService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskGeneralUpdProcedureV1(dataJsonDto: GeneralUpdProcedureV1Dto) {
    try {
      const queryString = generalUpdProcedureV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'General update procedure failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
