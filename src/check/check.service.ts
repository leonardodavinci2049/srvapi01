import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import {
  SpCheckIfCnpjExistType,
  SpCheckIfCpfExistType,
  SpCheckIfEmailExistType,
} from './types/check.type';

import { CheckIfEmailExistsDto } from './dto/check-if-email-exists.dto';
import { CheckIfCpfExistsDto } from './dto/check-if-cpf-exists.dto';
import { CheckIfCnpjExistsDto } from './dto/check-if-cnpj-exists.dto';

import { CheckIfEmailExistsQuery } from './query/check-if-email-exists.query';
import { CheckIfCpfExistsQuery } from './query/check-if-cpf-exists.query';
import { CheckIfCnpjExistsQuery } from './query/check-if-cnpj-exists.query';

@Injectable()
export class CheckService {
  constructor(private readonly dbService: DatabaseService) {}

  // xxxx
  async tskCheckIfEmailExist(dataJsonDto: CheckIfEmailExistsDto) {
    try {
      const queryString = CheckIfEmailExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfEmailExistType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CHECK ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpCheckIfEmailExistType>(
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

  // xxxx
  async tskCheckIfCpfExist(dataJsonDto: CheckIfCpfExistsDto) {
    try {
      const queryString = CheckIfCpfExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfCpfExistType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CHECK ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpCheckIfCpfExistType>(
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

  // xxxx
  async tskCheckIfCnpjExist(dataJsonDto: CheckIfCnpjExistsDto) {
    try {
      const queryString = CheckIfCnpjExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfCnpjExistType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CHECK ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpCheckIfCnpjExistType>(
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
