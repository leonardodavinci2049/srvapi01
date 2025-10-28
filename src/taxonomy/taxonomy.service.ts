import { Injectable } from '@nestjs/common';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { TaxonomyCreateDto } from './dto/taxonomy-create.dto';
import { TaxonomyRelCreateDto } from './dto/taxonomy-rel-create.dto';
import { TaxonomyFindIdDto } from './dto/taxonomy-find-id.dto';
import { TaxonomyFindDto } from './dto/taxonomy-find.dto';
import { TaxonomyFindMenuDto } from './dto/taxonomy-find-menu.dto';
import { TaxonomyRelProdutoDto } from './dto/taxonomy-rel-produto.dto';
import { TaxonomyUpdateDto } from './dto/taxonomy-update.dto';
import { TaxonomyDeleteDto } from './dto/taxonomy-delete.dto';
import { TaxonomyRelDeleteDto } from './dto/taxonomy-rel-delete.dto';

import {
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultRecordUpdateType,
  SpResultTaxonomyFindData,
  SpResultTaxonomyFindIdData,
  SpResultTaxonomyFindMenuData,
  SpResultTaxonomyRelProdutoData,
} from './types/taxonomy.type';

import { createTaxonomyQuery } from './query/taxonomy-create.query';
import { DatabaseService } from 'src/database/database.service';
import { createTaxonomyRelQuery } from './query/taxonomy-rel-create.query';
import { updateTaxonomyQuery } from './query/taxonomy-update.query';
import { deleteTaxonomyQuery } from './query/taxonomy-delete.query';
import { deleteTaxonomyRelQuery } from './query/taxonomy-rel-delete.query';
import { findTaxonomyIdQuery } from './query/taxonomy-find-id.query';

import { findTaxonomyQuery } from './query/taxonomy-find.query';
import { findTaxonomyMenuQuery } from './query/taxonomy-find-menu.query';
import { findTaxonomyRelProdutoQuery } from './query/taxonomy-rel-produto.query';

@Injectable()
export class TaxonomyService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskTaxonomyCreateV2(dataJsonDto: TaxonomyCreateDto) {
    try {
      const queryString = createTaxonomyQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordCreateType>(
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

  async tskTaxonomyRelCreateV2(dataJsonDto: TaxonomyRelCreateDto) {
    try {
      const queryString = createTaxonomyRelQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordCreateType>(
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

  async tskTaxonomyFindIdV2(dataJsonDto: TaxonomyFindIdDto) {
    try {
      const queryString = findTaxonomyIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_TAXONOMY ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (qtRecords === 0 && errorId === 0) {
        Feedback = 'Product not found';
      }

      return resultQueryData<SpResultTaxonomyFindIdData>(
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

  async tskTaxonomyFindV2(dataJsonDto: TaxonomyFindDto) {
    try {
      const queryString = findTaxonomyQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindData;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_TAXONOMY ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (qtRecords === 0 && errorId === 0) {
        Feedback = 'Product not found';
      }
      return resultQueryData<SpResultTaxonomyFindData>(
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

  async tskTaxonomyFindMenuV2(dataJsonDto: TaxonomyFindMenuDto) {
    try {
      const queryString = findTaxonomyMenuQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindMenuData;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_TAXONOMY ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (qtRecords === 0 && errorId === 0) {
        Feedback = 'Product not found';
      }

      return resultQueryData<SpResultTaxonomyFindMenuData>(
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
  async tskTaxonomyRelProdutoV2(dataJsonDto: TaxonomyRelProdutoDto) {
    try {
      const queryString = findTaxonomyRelProdutoQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyRelProdutoData;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_TAXONOMY ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (qtRecords === 0 && errorId === 0) {
        Feedback = 'Product not found';
      }

      return resultQueryData<SpResultTaxonomyRelProdutoData>(
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

  async tskTaxonomyUpdateV2(dataJsonDto: TaxonomyUpdateDto) {
    try {
      const queryString = updateTaxonomyQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
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

  async tskTaxonomyDeleteV2(dataJsonDto: TaxonomyDeleteDto) {
    try {
      const queryString = deleteTaxonomyQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordDeleteType>(
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

  async tskTaxonomyRelDeleteV2(dataJsonDto: TaxonomyRelDeleteDto) {
    try {
      const queryString = deleteTaxonomyRelQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordDeleteType>(
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
