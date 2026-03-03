import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';

import { DatabaseService } from 'src/database/database.service';

import { ProductUpdCharacteristicsV3Dto } from './dto/product-upd-characteristics-v3.dto';
import { ProductUpdFlagsV3Dto } from './dto/product-upd-flags-v3.dto';
import { ProductUpdGeneralV3Dto } from './dto/product-upd-general-v3.dto';
import { ProductUpdMetadataV3Dto } from './dto/product-upd-metadata-v3.dto';
import { ProductUpdPriceV3Dto } from './dto/product-upd-price-v3.dto';
import { ProductUpdTaxValuesV3Dto } from './dto/product-upd-tax-values-v3.dto';
import { ProductUpdCharacteristicsV3Query } from './query/product-upd-characteristics-v3.query';
import { SpResultRecordUpdateType } from './types/product-update.type';
import { ProductUpdFlagsV3Query } from './query/product-upd-flags-v3.query';
import { ProductUpdGeneralV3Query } from './query/product-upd-general-v3.query';

import { ProductUpdMetadataV3Query } from './query/product-upd-metadata-v3.query';
import { ProductUpdPriceV3Query } from './query/product-upd-price-v3.query';
import { ProductUpdTaxValuesV3Query } from './query/product-upd-tax-values-v3.query';

@Injectable()
export class ProductUpdateService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new productUpdate';
  }

  async taskproductUpdCharacteristicsV3(
    dataJsonDto: ProductUpdCharacteristicsV3Dto,
  ) {
    try {
      const queryString = ProductUpdCharacteristicsV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Characteristics update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdFlagsV3(dataJsonDto: ProductUpdFlagsV3Dto) {
    try {
      const queryString = ProductUpdFlagsV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Flags update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdGeneralV3(dataJsonDto: ProductUpdGeneralV3Dto) {
    try {
      const queryString = ProductUpdGeneralV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'General update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdMetadataV3(dataJsonDto: ProductUpdMetadataV3Dto) {
    try {
      const queryString = ProductUpdMetadataV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Metadata update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdPriceV3(dataJsonDto: ProductUpdPriceV3Dto) {
    try {
      const queryString = ProductUpdPriceV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Price update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdTaxValuesV3(dataJsonDto: ProductUpdTaxValuesV3Dto) {
    try {
      const queryString = ProductUpdTaxValuesV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Tax values update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
