import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';

import { DatabaseService } from 'src/database/database.service';
import { WebhookService } from 'src/webhook/webhook.service';

import { ProductUpdInlBrandV3Dto } from './dto/product-upd-inl-brand-v3.dto';
import { ProductUpdInlDescriptionV3Dto } from './dto/product-upd-inl-description-v3.dto';
import { ProductUpdInlFieldDto } from './dto/product-upd-inl-field.dto';
import { ProductUpdInlNameV3Dto } from './dto/product-upd-inl-name-v3.dto';
import { ProductUpdInlPathImageV3Dto } from './dto/product-upd-inl-path-image-v3.dto';
import { ProductUpdInlShortDescriptionV3Dto } from './dto/product-upd-inl-Short-description-v3.dto';
import { ProductUpdInlStockMinV3Dto } from './dto/product-upd-inl-stock-min-v3.dto';
import { ProductUpdInlStockV3Dto } from './dto/product-upd-inl-stock-v3.dto';
import { ProductUpdInlTypeV3Dto } from './dto/product-upd-inl-type-v3.dto';
import { ProductUpdInlVariouV3Dto } from './dto/product-upd-inl-variou-v3.dto';
import { ProductUpdInlBrandV3Query } from './query/product-upd-inl-brand-v3.query';
import { ProductUpdInlDescriptionV3Query } from './query/product-upd-inl-description-v3.query';
import { ProductUpdInlFieldQuery } from './query/product-upd-inl-field.query';
import { ProductUpdInlNameV3Query } from './query/product-upd-inl-name-v3.query';
import { ProductUpdInlPathImageV3Query } from './query/product-upd-inl-path-image-v3.query';
import { ProductUpdInlShortDescriptionV3Query } from './query/product-upd-inl-Short-description-v3.query';
import { ProductUpdInlStockMinV3Query } from './query/product-upd-inl-stock-min-v3.query';
import { ProductUpdInlStockV3Query } from './query/product-upd-inl-stock-v3.query';
import { ProductUpdInlTypeV3Query } from './query/product-upd-inl-type-v3.query';
import { ProductUpdInlVariouV3Query } from './query/product-upd-inl-variou-v3.query';
import { SpResultRecordUpdateType } from './types/product-inline.type';

@Injectable()
export class ProductInlineService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly webhookService: WebhookService,
  ) {}
  create() {
    return 'This action adds a new productInline';
  }

  async taskProductUpdInlFieldV3(dataJsonDto: ProductUpdInlFieldDto) {
    try {
      const queryString = ProductUpdInlFieldQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Product update field failed',
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

  async taskProductUpdInlBrandV3(dataJsonDto: ProductUpdInlBrandV3Dto) {
    try {
      const queryString = ProductUpdInlBrandV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Brand update failed',
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

  async taskProductUpdInlDescriptionV3(
    dataJsonDto: ProductUpdInlDescriptionV3Dto,
  ) {
    try {
      const queryString = ProductUpdInlDescriptionV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Description update failed',
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

  async taskProductUpdInlNameV3(dataJsonDto: ProductUpdInlNameV3Dto) {
    try {
      const queryString = ProductUpdInlNameV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Name update failed',
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

  async taskProductUpdInlPathImageV3(dataJsonDto: ProductUpdInlPathImageV3Dto) {
    try {
      const queryString = ProductUpdInlPathImageV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Path image update failed',
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

  async taskProductUpdInlShortDescriptionV3(
    dataJsonDto: ProductUpdInlShortDescriptionV3Dto,
  ) {
    try {
      const queryString = ProductUpdInlShortDescriptionV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Short description update failed',
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

  async taskProductUpdInlStockMinV3(dataJsonDto: ProductUpdInlStockMinV3Dto) {
    try {
      const queryString = ProductUpdInlStockMinV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Stock min update failed',
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

  async taskProductUpdInlStockV3(dataJsonDto: ProductUpdInlStockV3Dto) {
    try {
      const queryString = ProductUpdInlStockV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Stock update failed',
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

  async taskProductUpdInlTypeV3(dataJsonDto: ProductUpdInlTypeV3Dto) {
    try {
      const queryString = ProductUpdInlTypeV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Type update failed',
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

  async taskProductUpdInlVariouV3(dataJsonDto: ProductUpdInlVariouV3Dto) {
    try {
      const queryString = ProductUpdInlVariouV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Various update failed',
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
