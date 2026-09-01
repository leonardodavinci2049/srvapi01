import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { EntryCreateV2Dto } from './dto/entry-create-v2.dto';
import { EntryDeleteV2Dto } from './dto/entry-delete-v2.dto';
import { EntryFindAllV2Dto } from './dto/entry-find-all-v2.dto';
import { EntryFindIdV2Dto } from './dto/entry-find-id-v2.dto';
import { EntryFindSearchV2Dto } from './dto/entry-find-search-v2.dto';
import { EntryProcessInventoryV2Dto } from './dto/entry-process-inventory-v2.dto';
import { EntryUpdCarrierIdDto } from './dto/entry-upd-carrier-id.dto';
import { EntryUpdGeneralFieldDto } from './dto/entry-upd-general-field.dto';
import { EntryUpdMainDto } from './dto/entry-upd-main.dto';
import { EntryUpdNotesDto } from './dto/entry-upd-notes.dto';
import { EntryUpdSupplierIdDto } from './dto/entry-upd-supplier-id.dto';
import { EntryUpdTaxRatesDto } from './dto/entry-upd-tax-rates.dto';
import { EntryCreateV2Query } from './query/entry-create-v2.query';
import { EntryDeleteV2Query } from './query/entry-delete-v2.query';
import { EntryFindAllV2Query } from './query/entry-find-all-v2.query';
import { EntryFindIdV2Query } from './query/entry-find-id-v2.query';
import { EntryFindSearchV2Query } from './query/entry-find-search-v2.query';
import { EntryProcessInventoryV2Query } from './query/entry-process-inventory-v2.query';
import { EntryUpdCarrierIdQuery } from './query/entry-upd-carrier-id.query';
import { EntryUpdGeneralFieldQuery } from './query/entry-upd-general-field.query';
import { EntryUpdMainQuery } from './query/entry-upd-main.query';
import { EntryUpdNotesQuery } from './query/entry-upd-notes.query';
import { EntryUpdSupplierIdQuery } from './query/entry-upd-supplier-id.query';
import { EntryUpdTaxRatesQuery } from './query/entry-upd-tax-rates.query';
import {
  SpResultEntryFindAllData,
  SpResultEntryFindIdData,
  SpResultEntryFindSearchData,
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultRecordOperationType,
  SpResultRecordUpdateType,
} from './types/entry.type';

@Injectable()
export class EntryService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskEntryCreateV2(dataJsonDto: EntryCreateV2Dto) {
    try {
      const { queryString, queryParams } = EntryCreateV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(resultData, 'Entry create failed');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryFindAllV2(dataJsonDto: EntryFindAllV2Dto) {
    try {
      const { queryString, queryParams } = EntryFindAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultEntryFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['entryFindAll'],
        'Entry find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryFindIdV2(dataJsonDto: EntryFindIdV2Dto) {
    try {
      const { queryString, queryParams } = EntryFindIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultEntryFindIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['entryData', 'entrySummary'],
        'Entry find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryFindSearchV2(dataJsonDto: EntryFindSearchV2Dto) {
    try {
      const { queryString, queryParams } = EntryFindSearchV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultEntryFindSearchData;

      return processProcedureResultMultiQuery(
        resultData,
        ['entrySearch'],
        'Entry find search not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryProcessInventoryV2(dataJsonDto: EntryProcessInventoryV2Dto) {
    try {
      const { queryString, queryParams } =
        EntryProcessInventoryV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordOperationType;

      return processProcedureResultMutation(
        resultData,
        'Entry process inventory failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryUpdMainV2(dataJsonDto: EntryUpdMainDto) {
    try {
      const { queryString, queryParams } = EntryUpdMainQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(resultData, 'Entry update failed');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryUpdNotesV2(dataJsonDto: EntryUpdNotesDto) {
    try {
      const { queryString, queryParams } = EntryUpdNotesQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry notes update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryUpdCarrierIdV2(dataJsonDto: EntryUpdCarrierIdDto) {
    try {
      const { queryString, queryParams } = EntryUpdCarrierIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry carrier update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryUpdSupplierIdV2(dataJsonDto: EntryUpdSupplierIdDto) {
    try {
      const { queryString, queryParams } = EntryUpdSupplierIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry supplier update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryUpdTaxRatesV2(dataJsonDto: EntryUpdTaxRatesDto) {
    try {
      const { queryString, queryParams } = EntryUpdTaxRatesQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry tax rates update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryUpdGeneralFieldV2(dataJsonDto: EntryUpdGeneralFieldDto) {
    try {
      const { queryString, queryParams } =
        EntryUpdGeneralFieldQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry field update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryDeleteV2(dataJsonDto: EntryDeleteV2Dto) {
    try {
      const { queryString, queryParams } = EntryDeleteV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(resultData, 'Entry delete failed');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
