import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';

import { DatabaseService } from 'src/database/database.service';
import { WebhookService } from 'src/webhook/webhook.service';

import { ProductUpdCharacteristicsV3Dto } from './dto/product-upd-characteristics-v3.dto';
import { ProductUpdFlagsV3Dto } from './dto/product-upd-flags-v3.dto';
import { ProductUpdGeneralV3Dto } from './dto/product-upd-general-v3.dto';
import { ProductUpdMetadataV3Dto } from './dto/product-upd-metadata-v3.dto';
import { ProductUpdPriceV3Dto } from './dto/product-upd-price-v3.dto';
import { ProductUpdTaxValuesV3Dto } from './dto/product-upd-tax-values-v3.dto';
import { ProductUpdCharacteristicsV3Query } from './query/product-upd-characteristics-v3.query';
import { ProductUpdFlagsV3Query } from './query/product-upd-flags-v3.query';
import { ProductUpdGeneralV3Query } from './query/product-upd-general-v3.query';
import { ProductUpdMetadataV3Query } from './query/product-upd-metadata-v3.query';
import { ProductUpdPriceV3Query } from './query/product-upd-price-v3.query';
import { ProductUpdTaxValuesV3Query } from './query/product-upd-tax-values-v3.query';
import { SpResultRecordUpdateType } from './types/product-update.type';

@Injectable()
export class ProductUpdateService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly webhookService: WebhookService,
  ) {}
  create() {
    return 'This action adds a new productUpdate';
  }

  async taskProductUpdCharacteristicsV3(
    dataJsonDto: ProductUpdCharacteristicsV3Dto,
  ) {
    try {
      const queryString = ProductUpdCharacteristicsV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Characteristics update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyProductsAllInBackground(
          dataJsonDto.pe_system_client_id,
        );
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductUpdFlagsV3(dataJsonDto: ProductUpdFlagsV3Dto) {
    try {
      const queryString = ProductUpdFlagsV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Flags update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyProductsAllInBackground(
          dataJsonDto.pe_system_client_id,
        );
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductUpdGeneralV3(dataJsonDto: ProductUpdGeneralV3Dto) {
    try {
      const queryString = ProductUpdGeneralV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'General update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyProductsAllInBackground(
          dataJsonDto.pe_system_client_id,
        );
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductUpdMetadataV3(dataJsonDto: ProductUpdMetadataV3Dto) {
    try {
      const queryString = ProductUpdMetadataV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Metadata update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyProductsAllInBackground(
          dataJsonDto.pe_system_client_id,
        );
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductUpdPriceV3(dataJsonDto: ProductUpdPriceV3Dto) {
    try {
      const queryString = ProductUpdPriceV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Price update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyProductsAllInBackground(
          dataJsonDto.pe_system_client_id,
        );
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductUpdTaxValuesV3(dataJsonDto: ProductUpdTaxValuesV3Dto) {
    try {
      const queryString = ProductUpdTaxValuesV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Tax values update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyProductsAllInBackground(
          dataJsonDto.pe_system_client_id,
        );
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
