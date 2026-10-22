import { Injectable, Logger } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';

import { DatabaseService } from 'src/database/database.service';
import { WebhookService } from 'src/webhook/webhook.service';

import { ProductCreateV3Dto } from './dto/product-create-v3.dto';
import { ProductFindAllV3Dto } from './dto/product-find-all-v3.dto';
import { ProductFindIdV3Dto } from './dto/product-find-id-v3.dto';
import { ProductFindPremiumV1Dto } from './dto/product-find-premium-v1.dto';
import { ProductFindSearchAllV3Dto } from './dto/product-find-search-all-v3.dto';
import { ProductCreateV3Query } from './query/product-create-v3.query';
import { ProductFindAllV3Query } from './query/product-find-all-v3.query';
import { ProductFindIdV3Query } from './query/product-find-id-v3.query';
import { ProductFindPremiumV1Query } from './query/product-find-premium-v1.query';
import { ProductFindSearchAllV3Query } from './query/product-find-search-all-v3.query';
import {
  SpResultProductFindBaseAllV3Data,
  SpResultProductFindBaseIdV3Data,
  SpResultProductFindBaseSearchAllV3Data,
  SpResultProductFindPremiumV1Data,
  SpResultRecordCreateType,
} from './types/product-base.type';

@Injectable()
export class ProductBaseService {
  private readonly logger = new Logger(ProductBaseService.name);

  constructor(
    private readonly dbService: DatabaseService,
    private readonly webhookService: WebhookService,
  ) {}
  create() {
    return 'This action adds a new productBase';
  }

  async taskProductCreateV3(dataJsonDto: ProductCreateV3Dto) {
    try {
      const queryString = ProductCreateV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      const result = processProcedureResultMutation(
        resultData,
        'Product create failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        void this.webhookService
          .notifyProductsAll(dataJsonDto.pe_system_client_id)
          .then((delivery) => {
            if (!delivery.success) {
              this.logger.warn('Cache revalidation webhook delivery failed');
            }
          })
          .catch(() => {
            this.logger.warn('Cache revalidation webhook delivery failed');
          });
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductFindAllV3(dataJsonDto: ProductFindAllV3Dto) {
    try {
      const queryString = ProductFindAllV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindBaseAllV3Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product find All'],
        'Product find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductFindPremiunV1(dataJsonDto: ProductFindPremiumV1Dto) {
    try {
      const queryString = ProductFindPremiumV1Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindPremiumV1Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product find Premium V1'],
        'Product find Premium V1 not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductSearchAllV3(dataJsonDto: ProductFindSearchAllV3Dto) {
    try {
      const queryString = ProductFindSearchAllV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindBaseSearchAllV3Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product find All'],
        'Product find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductFindIdV3(dataJsonDto: ProductFindIdV3Dto) {
    try {
      const queryString = ProductFindIdV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindBaseIdV3Data;

      return processProcedureResultMultiQuery(
        resultData,
        [
          'Product find Id',
          'Product find Id categories',
          'Product find Id related',
        ],
        'Product find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
