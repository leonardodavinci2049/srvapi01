import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
// ---- DTSs ---
import { FindAccountStatisticsDto } from './dto/find-account-statistics.dto';
import { FindAccountOrdersSummaryDto } from './dto/find-account-orders-summary.dto';
import { FindAccountSummaryDto } from './dto/find-account-summary.dto';
import { FindAccountProfileDto } from './dto/find-account-profile.dto';
import { FindAccountOrdersListDto } from './dto/find-account-orders-list.dto';
import { FindAccountPromotionDto } from './dto/find-account-promotion.dto';
import { FindAccountServicesDto } from './dto/find-account_services.dto';
import { FindAccountConfigDto } from './dto/find-account-config.dto';
import { UpdAccountGeneralDto } from './dto/upd-account-general.dto';
import { UpdAccountTypeDto } from './dto/upd-account-type.dto';
import { UpdAccountBusinessDto } from './dto/upd-account-business.dto';
import { UpdAccountPersonalDto } from './dto/upd-account-personal.dto';
import { UpdAccountAddressDto } from './dto/upd-account-address.dto';
import { UpdAccountInternetDto } from './dto/upd-account-internet.dto';
import { UpdAccountNotificationDto } from './dto/upd-account-notification.dto';
import { UpdAccountEmailDto } from './dto/upd-account-email.dto';
import { UpdAccountPasswordDto } from './dto/upd-account-password.dto';
import { UpdAccountThemeDto } from './dto/upd-account-theme.dto';
import { FindAccountOrdersLatestDto } from './dto/find-account-orders-latest.dto';
// ---- xxxx ---
import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
// ---- query ---

import { FindAccountStatisticsQuery } from './query/find-account-statistics.query';
import { FindAccountOrdersLatestQuery } from './query/find-account-orders-latest.query';
import { FindAccountSummaryQuery } from './query/find-account-summary.query';
import { FindAccountProfileQuery } from './query/find-account-profile.query';
import { FindAccountOrdersListQuery } from './query/find-account-orders-list.query';
import { FindAccountOrdersSummaryQuery } from './query/find-account-orders-summary.query';
import { FindAccountPromotionQuery } from './query/find-account-promotion.query';
import { FindAccountServiceQuery } from './query/find-account-service.query';
import { FindAccountConfigQuery } from './query/find-account-config.query';
import { UpdAccountGeneralQuery } from './query/upd-account-general.query';
import { UpdAccountTypeQuery } from './query/upd-account-type.query';
import { UpdAccountBusinessQuery } from './query/upd-account-business.query';
import { UpdAccountPersonalQuery } from './query/upd-account-personal.query';
import { UpdAccountAddressQuery } from './query/upd-account-address.query';
import { UpdAccountInternetQuery } from './query/upd-account-internet.query';
import { UpdAccountThemeQuery } from './query/upd-account-theme.query';
import { UpdAccountNotificationQuery } from './query/upd-account-notification.query';
import { UpdAccountEmailQuery } from './query/upd-account-email.query';
import { UpdAccountPasswordQuery } from './query/upd-account-password.query';
import {
  SpResultAccountAddressUpdType,
  SpResultAccountBusinessUpdType,
  SpResultAccountConfigType,
  SpResultAccountEmailUpdType,
  SpResultAccountGeneralUpdType,
  SpResultAccountInternetUpdType,
  SpResultAccountNotificationUpdType,
  SpResultAccountOrdersListType,
  SpResultAccountOrdersSummaryType,
  SpResultAccountPasswordUpdType,
  SpResultAccountPersonalUpdType,
  SpResultAccountProductsPromotionType,
  SpResultAccountProfileType,
  SpResultAccountServicesType,
  SpResultAccountStatisticsType,
  SpResultAccountSummaryType,
  SpResultAccountThemeUpdType,
  SpResultAccountTypeUpdType,
} from './types/account.type';

@Injectable()
export class AccountService {
  constructor(private readonly dbService: DatabaseService) {}

  // dasbord  ---
  async tskAccountStatistics(dataJsonDto: FindAccountStatisticsDto) {
    try {
      const queryString = FindAccountStatisticsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountStatisticsType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountStatisticsType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskAccountOrdersLatest(dataJsonDto: FindAccountOrdersLatestDto) {
    try {
      const queryString = FindAccountOrdersLatestQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountStatisticsType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountStatisticsType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async tskAccountSummary(dataJsonDto: FindAccountSummaryDto) {
    try {
      const queryString = FindAccountSummaryQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountSummaryType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_USUARIO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountSummaryType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  //  Profile  ---
  async tskAccountProfile(dataJsonDto: FindAccountProfileDto) {
    try {
      const queryString = FindAccountProfileQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountProfileType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountProfileType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  //  order  ---
  async tskAccountOrdersList(dataJsonDto: FindAccountOrdersListDto) {
    try {
      const queryString = FindAccountOrdersListQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountOrdersListType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_PEDIDO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountOrdersListType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async tskAccountOrdersSummary(dataJsonDto: FindAccountOrdersSummaryDto) {
    try {
      const queryString = FindAccountOrdersSummaryQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountOrdersSummaryType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_PEDIDO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountOrdersSummaryType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  //  Promotion  ---
  async tskAccountPromotion(dataJsonDto: FindAccountPromotionDto) {
    try {
      const queryString = FindAccountPromotionQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountProductsPromotionType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_PRODUTO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountProductsPromotionType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  //  Services  ---
  async tskAccountServices(dataJsonDto: FindAccountServicesDto) {
    try {
      const queryString = FindAccountServiceQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountServicesType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_SERVICE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountServicesType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  // -- Config  ---
  async tskAccountConfig(dataJsonDto: FindAccountConfigDto) {
    try {
      const queryString = FindAccountConfigQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountConfigType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_USUARIO ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountConfigType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  //  profile ---
  async tskAccountGeneral(dataJsonDto: UpdAccountGeneralDto) {
    try {
      const queryString = UpdAccountGeneralQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountGeneralUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountGeneralUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskAccountType(dataJsonDto: UpdAccountTypeDto) {
    try {
      const queryString = UpdAccountTypeQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountTypeUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountTypeUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskAccountBusiness(dataJsonDto: UpdAccountBusinessDto) {
    try {
      const queryString = UpdAccountBusinessQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountBusinessUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountBusinessUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskAccountPersonal(dataJsonDto: UpdAccountPersonalDto) {
    try {
      const queryString = UpdAccountPersonalQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountPersonalUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountPersonalUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskAccountAddress(dataJsonDto: UpdAccountAddressDto) {
    try {
      const queryString = UpdAccountAddressQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountAddressUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountAddressUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskAccountInternet(dataJsonDto: UpdAccountInternetDto) {
    try {
      const queryString = UpdAccountInternetQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountInternetUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountInternetUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  //  config ---
  async tskAccountTheme(dataJsonDto: UpdAccountThemeDto) {
    try {
      const queryString = UpdAccountThemeQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountThemeUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountThemeUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async tskAccountNotification(dataJsonDto: UpdAccountNotificationDto) {
    try {
      const queryString = UpdAccountNotificationQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountNotificationUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountNotificationUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async tskAccountEmail(dataJsonDto: UpdAccountEmailDto) {
    try {
      const queryString = UpdAccountEmailQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountEmailUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountEmailUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async tskAccountPassword(dataJsonDto: UpdAccountPasswordDto) {
    try {
      const queryString = UpdAccountPasswordQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultAccountPasswordUpdType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_CLIENTE ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultAccountPasswordUpdType>(
        recordId,
        0,
        '',
        resultData,
        qtRecords,
        '',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
