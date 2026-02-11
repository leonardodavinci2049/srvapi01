import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';

import { DatabaseService } from 'src/database/database.service';

import { CustomerUpdAddressDto } from './dto/customer-upd-address.dto';
import { CustomerUpdBusinessDto } from './dto/customer-upd-business.dto';
import { CustomerUpdFlagDto } from './dto/customer-upd-flag.dto';
import { CustomerUpdGeneralDto } from './dto/customer-upd-general.dto';
import { CustomerUpdInternetDto } from './dto/customer-upd-internet.dto';
import { CustomerUpdPersonalDto } from './dto/customer-upd-personal.dto';

import { SpResultRecordUpdateType } from './types/costumer-upd.type';

import { CustomerUpdAddressQuery } from './query/customer-upd-address.query';
import { CustomerUpdBusinessQuery } from './query/customer-upd-business.query';
import { CustomerUpdFlagQuery } from './query/customer-upd-flag.query';
import { CustomerUpdGeneralQuery } from './query/customer-upd-general.query';
import { CustomerUpdInternetQuery } from './query/customer-upd-internet.query';
import { CustomerUpdPersonalQuery } from './query/customer-upd-personal.query';

@Injectable()
export class CustomerUpdService {
  constructor(private readonly dbService: DatabaseService) {}

  async TaskCustomerUpdAddress(dataJsonDto: CustomerUpdAddressDto) {
    try {
      const queryString = CustomerUpdAddressQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update address failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async TaskCustomerUpdBusiness(dataJsonDto: CustomerUpdBusinessDto) {
    try {
      const queryString = CustomerUpdBusinessQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update business failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async TaskCustomerUpdFlag(dataJsonDto: CustomerUpdFlagDto) {
    try {
      const queryString = CustomerUpdFlagQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update flag failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async TaskCustomerUpdGeneral(dataJsonDto: CustomerUpdGeneralDto) {
    try {
      const queryString = CustomerUpdGeneralQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update general failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async TaskCustomerUpdInternet(dataJsonDto: CustomerUpdInternetDto) {
    try {
      const queryString = CustomerUpdInternetQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update internet failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async TaskCustomerUpdPersonal(dataJsonDto: CustomerUpdPersonalDto) {
    try {
      const queryString = CustomerUpdPersonalQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Customer update personal failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
