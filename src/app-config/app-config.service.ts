import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { processSqlResultQuery } from 'src/core/process-result/process-sql-result.query';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { WebhookService } from 'src/webhook/webhook.service';
import { AppConfigFindAllV2Dto } from './dto/app-config-find-all-v2.dto';
import { AppConfigFindIdV2Dto } from './dto/app-config-find-id-v2.dto';
import { AppConfigFindWebhookIdV2Dto } from './dto/app-config-find-webhook-id-v2.dto';
import { AppConfigUpdGeneralFieldV2Dto } from './dto/app-config-upd-general-field-v2.dto';
import { AppMenuFindTypeV2Dto } from './dto/app-menu-find-type-v2.dto';
import { AppConfigFindAllV2Query } from './query/app-config-find-all-v2.query';
import { AppConfigFindIdQuery } from './query/app-config-find-id.query';
import { AppConfigFindWebhookIdV2Query } from './query/app-config-find-webhook_id-v2.query';
import { AppConfigUpdGeneralFieldV2Query } from './query/app-config-upd-general-field-v2.query';
import { AppMenuFindTypeV2Query } from './query/app-menu-find-type-v2.query';
import {
  SpResultAppConfigFindAllData,
  SpResultAppConfigFindIdData,
  SpResultAppMenuFindTypeData,
  SpResultRecordUpdateType,
  TblAppConfigFindWebhookId,
} from './types/app-config.type';

@Injectable()
export class AppConfigService {
  constructor(
    private readonly dbService: DatabaseService,
    @Inject(forwardRef(() => WebhookService))
    private readonly webhookService: WebhookService,
  ) {}

  async taskAppConfigFindAllV2(dataJsonDto: AppConfigFindAllV2Dto) {
    try {
      const { queryString, queryParams } = AppConfigFindAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultAppConfigFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['App Config'],
        'Configurações da aplicação não encontradas',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskAppConfigFindIdV2(dataJsonDto: AppConfigFindIdV2Dto) {
    try {
      const { queryString, queryParams } = AppConfigFindIdQuery(dataJsonDto);

      //console.log('queryParams: ', queryParams);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultAppConfigFindIdData;

      // console.log('resultData: ', resultData);

      return processProcedureResultMultiQuery(
        resultData,
        ['App Config'],
        'Configuração da aplicação não encontrada',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskAppConfigFindWebhookIdV2(dataJsonDto: AppConfigFindWebhookIdV2Dto) {
    try {
      const { queryString, queryParams } =
        AppConfigFindWebhookIdV2Query(dataJsonDto);

      const resultData =
        await this.dbService.selectExecute<TblAppConfigFindWebhookId>(
          queryString,
          queryParams,
        );

      return processSqlResultQuery(
        resultData,
        'App Config',
        'Configuração da aplicação não encontrada',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskAppMenuFindTypeV2(dataJsonDto: AppMenuFindTypeV2Dto) {
    try {
      const { queryString, queryParams } = AppMenuFindTypeV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultAppMenuFindTypeData;

      return processProcedureResultMultiQuery(
        resultData,
        ['App Menu'],
        'Menus da aplicação não encontrados',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskAppConfigUpdGeneralFieldV2(
    dataJsonDto: AppConfigUpdGeneralFieldV2Dto,
  ) {
    try {
      const { queryString, queryParams } =
        AppConfigUpdGeneralFieldV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultRecordUpdateType;

      const result = processProcedureResultMutation(
        resultData,
        'App config field update failed',
      );

      // Notify only after successful persistence; delivery must not delay the response.
      if (
        result.statusCode === RESPONSE_CODES.SUCCESS &&
        result.errorId === 0 &&
        (result.quantity ?? 0) > 0
      ) {
        this.webhookService.notifyAppConfigAllInBackground(
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
