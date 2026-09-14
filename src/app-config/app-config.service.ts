import { Injectable } from '@nestjs/common';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { AppConfigFindAllV2Dto } from './dto/app-config-find-all-v2.dto';
import { AppMenuFindTypeV2Dto } from './dto/app-menu-find-type-v2.dto';
import { AppConfigFindAllV2Query } from './query/app-config-find-all-v2.query';
import { AppMenuFindTypeV2Query } from './query/app-menu-find-type-v2.query';
import {
  SpResultAppConfigFindAllData,
  SpResultAppMenuFindTypeData,
} from './types/app-config.type';

@Injectable()
export class AppConfigService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskAppConfigFindAllV2(dataJsonDto: AppConfigFindAllV2Dto) {
    try {
      const { queryString, queryParams } = AppConfigFindAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultAppConfigFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['App Config', 'App Menu'],
        'Configurações da aplicação não encontradas',
      );
    } catch {
      return new ResultModel(
        RESPONSE_CODES.INTERNAL_ERROR,
        MESSAGES.UNKNOWN_ERROR,
        0,
        [],
      );
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
    } catch {
      return new ResultModel(
        RESPONSE_CODES.INTERNAL_ERROR,
        MESSAGES.UNKNOWN_ERROR,
        0,
        [],
      );
    }
  }
}
