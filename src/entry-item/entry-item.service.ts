import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { EntryItemCreateV2Dto } from './dto/entry-item-create-v2.dto';
import { EntryItemDeleteV2Dto } from './dto/entry-item-delete-v2.dto';
import { EntryItemFindAllV2Dto } from './dto/entry-item-find-all-v2.dto';
import { EntryItemFindEntryIdV2Dto } from './dto/entry-item-find-entry-id-v2.dto';
import { EntryItemFindIdV2Dto } from './dto/entry-item-find-id-v2.dto';
import { EntryItemFindSearchV2Dto } from './dto/entry-item-find-search-v2.dto';
import { EntryItemProductSearchV2Dto } from './dto/entry-item-product-search-v2.dto';
import { EntryItemUpdDollarValueDto } from './dto/entry-item-upd-dollar-value.dto';
import { EntryItemUpdGeneralFieldDto } from './dto/entry-item-upd-general-field.dto';
import { EntryItemUpdMainDto } from './dto/entry-item-upd-main.dto';
import { EntryItemUpdNotesDto } from './dto/entry-item-upd-notes.dto';
import { EntryItemUpdProductCostDto } from './dto/entry-item-upd-product-cost.dto';
import { EntryItemUpdProductPriceDto } from './dto/entry-item-upd-product-price.dto';
import { EntryItemUpdTaxCodesDto } from './dto/entry-item-upd-tax-codes.dto';
import { EntryItemUpdTaxRatesDto } from './dto/entry-item-upd-tax-rates.dto';
import { EntryItemCreateV2Query } from './query/entry-item-create-v2.query';
import { EntryItemDeleteV2Query } from './query/entry-item-delete-v2.query';
import { EntryItemFindAllV2Query } from './query/entry-item-find-all-v2.query';
import { EntryItemFindEntryIdV2Query } from './query/entry-item-find-entry-id-v2.query';
import { EntryItemFindIdV2Query } from './query/entry-item-find-id-v2.query';
import { EntryItemFindSearchV2Query } from './query/entry-item-find-search-v2.query';
import { EntryItemProductSearchV2Query } from './query/entry-item-product-search-v2.query';
import { EntryItemUpdDollarValueQuery } from './query/entry-item-upd-dollar-value.query';
import { EntryItemUpdGeneralFieldQuery } from './query/entry-item-upd-general-field.query';
import { EntryItemUpdMainQuery } from './query/entry-item-upd-main.query';
import { EntryItemUpdNotesQuery } from './query/entry-item-upd-notes.query';
import { EntryItemUpdProductCostQuery } from './query/entry-item-upd-product-cost.query';
import { EntryItemUpdProductPriceQuery } from './query/entry-item-upd-product-price.query';
import { EntryItemUpdTaxCodesQuery } from './query/entry-item-upd-tax-codes.query';
import { EntryItemUpdTaxRatesQuery } from './query/entry-item-upd-tax-rates.query';
import {
  SpResultEntryItemFindAllData,
  SpResultEntryItemFindEntryIdData,
  SpResultEntryItemFindIdData,
  SpResultEntryItemFindSearchData,
  SpResultEntryItemProductSearchData,
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultRecordUpdateType,
} from './types/entry-item.type';

@Injectable()
export class EntryItemService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskEntryItemCreateV2(dataJsonDto: EntryItemCreateV2Dto) {
    try {
      const { queryString, queryParams } = EntryItemCreateV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(
        resultData,
        'Entry item create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemFindAllV2(dataJsonDto: EntryItemFindAllV2Dto) {
    try {
      const { queryString, queryParams } = EntryItemFindAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultEntryItemFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['entryItemFindAll'],
        'Entry item find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemFindEntryIdV2(dataJsonDto: EntryItemFindEntryIdV2Dto) {
    try {
      const { queryString, queryParams } =
        EntryItemFindEntryIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultEntryItemFindEntryIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['entryItemFindEntryId'],
        'Entry item find entry Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemFindIdV2(dataJsonDto: EntryItemFindIdV2Dto) {
    try {
      const { queryString, queryParams } = EntryItemFindIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultEntryItemFindIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['entryItemFindId'],
        'Entry item find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemFindSearchV2(dataJsonDto: EntryItemFindSearchV2Dto) {
    try {
      const { queryString, queryParams } =
        EntryItemFindSearchV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultEntryItemFindSearchData;

      return processProcedureResultMultiQuery(
        resultData,
        ['entryItemFindSearch'],
        'Entry item find search not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemProductSearchV2(dataJsonDto: EntryItemProductSearchV2Dto) {
    try {
      const { queryString, queryParams } =
        EntryItemProductSearchV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultEntryItemProductSearchData;

      return processProcedureResultMultiQuery(
        resultData,
        ['entryItemProductSearch'],
        'Entry item product search not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemUpdDollarValueV2(dataJsonDto: EntryItemUpdDollarValueDto) {
    try {
      const { queryString, queryParams } =
        EntryItemUpdDollarValueQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry item dollar value update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemUpdGeneralFieldV2(
    dataJsonDto: EntryItemUpdGeneralFieldDto,
  ) {
    try {
      const { queryString, queryParams } =
        EntryItemUpdGeneralFieldQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry item field update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemUpdMainV2(dataJsonDto: EntryItemUpdMainDto) {
    try {
      const { queryString, queryParams } = EntryItemUpdMainQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry item update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemUpdNotesV2(dataJsonDto: EntryItemUpdNotesDto) {
    try {
      const { queryString, queryParams } = EntryItemUpdNotesQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry item notes update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemUpdProductCostV2(dataJsonDto: EntryItemUpdProductCostDto) {
    try {
      const { queryString, queryParams } =
        EntryItemUpdProductCostQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry item product cost update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemUpdProductPriceV2(
    dataJsonDto: EntryItemUpdProductPriceDto,
  ) {
    try {
      const { queryString, queryParams } =
        EntryItemUpdProductPriceQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry item product price update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemUpdTaxCodesV2(dataJsonDto: EntryItemUpdTaxCodesDto) {
    try {
      const { queryString, queryParams } =
        EntryItemUpdTaxCodesQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry item tax codes update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemUpdTaxRatesV2(dataJsonDto: EntryItemUpdTaxRatesDto) {
    try {
      const { queryString, queryParams } =
        EntryItemUpdTaxRatesQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData,
        'Entry item tax rates update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskEntryItemDeleteV2(dataJsonDto: EntryItemDeleteV2Dto) {
    try {
      const { queryString, queryParams } = EntryItemDeleteV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordDeleteType;

      return processProcedureResultMutation(
        resultData,
        'Entry item delete failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
