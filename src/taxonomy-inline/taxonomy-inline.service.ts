import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';

import { DatabaseService } from 'src/database/database.service';
import { WebhookService } from 'src/webhook/webhook.service';
import { TaxonomyUpdInlImagePathV3Dto } from './dto/taxonomy-upd-inl-image-path-v3.dto';
import { TaxonomyUpdInlInactiveV3Dto } from './dto/taxonomy-upd-inl-inactive-v3.dto';
import { TaxonomyUpdInlNameV3Dto } from './dto/taxonomy-upd-inl-name-v3.dto';
import { TaxonomyUpdInlNotesV3Dto } from './dto/taxonomy-upd-inl-notes-v3.dto';
import { TaxonomyUpdInlOrderV3Dto } from './dto/taxonomy-upd-inl-order-v3.dto';
import { TaxonomyUpdInlParentIdV3Dto } from './dto/taxonomy-upd-inl-parent-id-v3.dto';
import { TaxonomyUpdInlQtProductsV3Dto } from './dto/taxonomy-upd-inl-qt-products-v3.dto';
import { TaxonomyUpdInlSlugV3Dto } from './dto/taxonomy-upd-inl-slug-v3.dto';
import { TaxonomyUpdInlImagePathV3Query } from './query/taxonomy-upd-inl-image-path-v3.query';
import { TaxonomyUpdInlInactiveV3Query } from './query/taxonomy-upd-inl-inactive-v3.query';
import { TaxonomyUpdInlNameV3Query } from './query/taxonomy-upd-inl-name-v3.query';
import { TaxonomyUpdInlNotesV3Query } from './query/taxonomy-upd-inl-notes-v3.query';
import { TaxonomyUpdInlOrderV3Query } from './query/taxonomy-upd-inl-order-v3.query';
import { TaxonomyUpdInlParentIdV3Query } from './query/taxonomy-upd-inl-parent-id-v3.query';
import { TaxonomyUpdInlQtProductsV3Query } from './query/taxonomy-upd-inl-qt-products-v3.query';
import { TaxonomyUpdInlSlugV3Query } from './query/taxonomy-upd-inl-slug-v3.query';
import { SpResultRecordUpdateType } from './types/taxonomy-inline.type';

@Injectable()
export class TaxonomyInlineService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly webhookService: WebhookService,
  ) {}
  create() {
    return 'This action adds a new taxonomyInline';
  }

  async taskTaxonomyUpdInlParentIdV3(dataJsonDto: TaxonomyUpdInlParentIdV3Dto) {
    try {
      const queryString = TaxonomyUpdInlParentIdV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyAllInBackground(
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

  async taskTaxonomyUpdInlNotesV3(dataJsonDto: TaxonomyUpdInlNotesV3Dto) {
    try {
      const queryString = TaxonomyUpdInlNotesV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyAllInBackground(
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

  async taskTaxonomyUpdInlNameV3(dataJsonDto: TaxonomyUpdInlNameV3Dto) {
    try {
      const queryString = TaxonomyUpdInlNameV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyAllInBackground(
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

  async taskTaxonomyUpdInlImagePathV3(
    dataJsonDto: TaxonomyUpdInlImagePathV3Dto,
  ) {
    try {
      const queryString = TaxonomyUpdInlImagePathV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyAllInBackground(
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

  async taskTaxonomyUpdInlInactiveV3(dataJsonDto: TaxonomyUpdInlInactiveV3Dto) {
    try {
      const queryString = TaxonomyUpdInlInactiveV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyAllInBackground(
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

  async taskTaxonomyUpdInlOrderV3(dataJsonDto: TaxonomyUpdInlOrderV3Dto) {
    try {
      const queryString = TaxonomyUpdInlOrderV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyAllInBackground(
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

  async taskTaxonomyUpdInlQtProductsV3(
    dataJsonDto: TaxonomyUpdInlQtProductsV3Dto,
  ) {
    try {
      const queryString = TaxonomyUpdInlQtProductsV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyAllInBackground(
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

  async taskTaxonomyUpdInlSlugV3(dataJsonDto: TaxonomyUpdInlSlugV3Dto) {
    try {
      const queryString = TaxonomyUpdInlSlugV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'Taxonomy update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyAllInBackground(
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
