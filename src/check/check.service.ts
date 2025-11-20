import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { CheckIfExistsDto } from './dto/check-if-exists.dto';

import { SpCheckIfExistType } from './types/check.type';

import { CheckIfEmailExistsQuery } from './query/check-if-email-exists.query';
import { CheckIfCpfExistsQuery } from './query/check-if-cpf-exists.query';
import { CheckIfCnpjExistsQuery } from './query/check-if-cnpj-exists.query';

import { CheckIfProductNameExistsQuery } from './query/check-if-product-name.query';
import { CheckIfProductSlugExistsQuery } from './query/check-if-product-slug.query';

import { CheckIfTaxomomyNameExistsQuery } from './query/check-if-taxonomy-name.query';
import { CheckIfTaxomomySlugExistsQuery } from './query/check-if-taxonomy-slug.query';

@Injectable()
export class CheckService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskCheckIfEmailExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const queryString = CheckIfEmailExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfExistType;

      const DefaultFeedback = resultData[1];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpCheckIfExistType>(
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

  async tskCheckIfCpfExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const queryString = CheckIfCpfExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfExistType;

      const DefaultFeedback = resultData[1];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpCheckIfExistType>(
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

  async tskCheckIfCnpjExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const queryString = CheckIfCnpjExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfExistType;

      const DefaultFeedback = resultData[1];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpCheckIfExistType>(
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

  async tskCheckIfProductNameExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const queryString = CheckIfProductNameExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfExistType;

      const DefaultFeedback = resultData[1];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpCheckIfExistType>(
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

  async tskCheckIfProductSlugExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const queryString = CheckIfProductSlugExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfExistType;

      const DefaultFeedback = resultData[1];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpCheckIfExistType>(
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

  async tskCheckIfTaxonomyNameExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const queryString = CheckIfTaxomomyNameExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfExistType;

      const DefaultFeedback = resultData[1];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpCheckIfExistType>(
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

  async tskCheckIfTaxonomySlugExist(dataJsonDto: CheckIfExistsDto) {
    try {
      const queryString = CheckIfTaxomomySlugExistsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpCheckIfExistType;

      const DefaultFeedback = resultData[1];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpCheckIfExistType>(
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
