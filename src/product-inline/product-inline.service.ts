import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';

import { DatabaseService } from 'src/database/database.service';

import { ProductUpdInlBrandV3Dto } from './dto/product-upd-inl-brand-v3.dto';
import { ProductUpdInlDescriptionV3Dto } from './dto/product-upd-inl-description-v3.dto';
import { ProductUpdInlNameV3Dto } from './dto/product-upd-inl-name-v3.dto';
import { ProductUpdInlPathImageV3Dto } from './dto/product-upd-inl-path-image-v3.dto';
import { ProductUpdInlShortDescriptionV3Dto } from './dto/product-upd-inl-Short-description-v3.dto';
import { ProductUpdInlStockMinV3Dto } from './dto/product-upd-inl-stock-min-v3.dto';
import { ProductUpdInlStockV3Dto } from './dto/product-upd-inl-stock-v3.dto';
import { ProductUpdInlTypeV3Dto } from './dto/product-upd-inl-type-v3.dto';
import { ProductUpdInlVariouV3Dto } from './dto/product-upd-inl-variou-v3.dto';
import { ProductUpdInlBrandV3Query } from './query/product-upd-inl-brand-v3.query';
import { ProductUpdInlDescriptionV3Query } from './query/product-upd-inl-description-v3.query';
import { SpResultRecordUpdateType } from './types/product-inline.type';
import { ProductUpdInlNameV3Query } from './query/product-upd-inl-name-v3.query';
import { ProductUpdInlPathImageV3Query } from './query/product-upd-inl-path-image-v3.query';
import { ProductUpdInlShortDescriptionV3Query } from './query/product-upd-inl-Short-description-v3.query';
import { ProductUpdInlStockMinV3Query } from './query/product-upd-inl-stock-min-v3.query';
import { ProductUpdInlStockV3Query } from './query/product-upd-inl-stock-v3.query';
import { ProductUpdInlTypeV3Query } from './query/product-upd-inl-type-v3.query';
import { ProductUpdInlVariouV3Query } from './query/product-upd-inl-variou-v3.query';

@Injectable()
export class ProductInlineService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new productInline';
  }

  async taskproductUpdInlBrandV3(dataJsonDto: ProductUpdInlBrandV3Dto) {
    try {
      const queryString = ProductUpdInlBrandV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdInlDescriptionV3(
    dataJsonDto: ProductUpdInlDescriptionV3Dto,
  ) {
    try {
      const queryString = ProductUpdInlDescriptionV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdInlNameV3(dataJsonDto: ProductUpdInlNameV3Dto) {
    try {
      const queryString = ProductUpdInlNameV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdInlPathImageV3(dataJsonDto: ProductUpdInlPathImageV3Dto) {
    try {
      const queryString = ProductUpdInlPathImageV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdInlShortDescriptionV3(
    dataJsonDto: ProductUpdInlShortDescriptionV3Dto,
  ) {
    try {
      const queryString = ProductUpdInlShortDescriptionV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdInlStockMinV3(dataJsonDto: ProductUpdInlStockMinV3Dto) {
    try {
      const queryString = ProductUpdInlStockMinV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdInlStockV3(dataJsonDto: ProductUpdInlStockV3Dto) {
    try {
      const queryString = ProductUpdInlStockV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdInlTypeV3(dataJsonDto: ProductUpdInlTypeV3Dto) {
    try {
      const queryString = ProductUpdInlTypeV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskproductUpdInlVariouV3(dataJsonDto: ProductUpdInlVariouV3Dto) {
    try {
      const queryString = ProductUpdInlVariouV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      return processProcedureResultMutation(
        resultData as unknown[],
        'Brand update failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
