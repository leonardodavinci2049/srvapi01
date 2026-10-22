import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { WebhookService } from 'src/webhook/webhook.service';

import { TaxonomyRelCreateV3Dto } from './dto/taxonomy-rel-create-v3.dto';
import { TaxonomyRelDeleteV3Dto } from './dto/taxonomy-rel-delete-v3.dto';
import { TaxonomyRelProdutoAllV3Dto } from './dto/taxonomy-rel-produto-all-v3.dto';
import { TaxonomyRelCreateV3Query } from './query/taxonomy-rel-create-v3.query';
import { TaxonomyRelDeleteV3Query } from './query/taxonomy-rel-delete-v3.query';
import { TaxonomyRelProdutoAllV3Query } from './query/taxonomy-rel-produto-all-v3.query';
import {
  SpResultRecordCreateType,
  SpResultRecordDeleteType,
  SpResultTaxonomyRelProdutoV3Data,
} from './types/taxonomy-rel.type';

@Injectable()
export class TaxonomyRelService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly webhookService: WebhookService,
  ) {}

  create() {
    return 'This action adds a new taxonomyRel';
  }

  async taskTaxonomyRelCreateV3(dataJsonDto: TaxonomyRelCreateV3Dto) {
    try {
      const queryString = TaxonomyRelCreateV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      const result = processProcedureResultMutation(
        resultData,
        'Brand create failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyRelInBackground(
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

  async taskTaxonomyRelProdutoAllV3(dataJsonDto: TaxonomyRelProdutoAllV3Dto) {
    try {
      const queryString = TaxonomyRelProdutoAllV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyRelProdutoV3Data;

      return processProcedureResultMultiQuery(
        resultData,
        ['Brand find All'],
        'Brand find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskTaxonomyRelDeleteV3(dataJsonDto: TaxonomyRelDeleteV3Dto) {
    try {
      const queryString = TaxonomyRelDeleteV3Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordDeleteType;

      const result = processProcedureResultMutation(
        resultData,
        'Brand delete failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyTaxonomyRelInBackground(
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
