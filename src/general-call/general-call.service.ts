import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { GeneralUpdProcedureV1Dto } from './dto/general-upd-procedure-v1.dto';
import { GeneralTableUpdInlFieldV2Dto } from './dto/general_table_upd_inl_field_v2.dto';
import { generalUpdProcedureV1Query } from './query/general-upd-procedure-v1.query';
import { generalTableUpdInlFieldV2Query } from './query/general_table_upd_inl_field_v2.query';
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
        resultData,
        'General update procedure failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskGeneralTableUpdInlFieldV2(
    dataJsonDto: GeneralTableUpdInlFieldV2Dto,
  ) {
    try {
      const queryString = generalTableUpdInlFieldV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'General table inline field update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
