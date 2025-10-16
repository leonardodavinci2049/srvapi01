import { Injectable } from '@nestjs/common';

import { findProductQuery } from './query/product_find.query';
import { DatabaseService } from 'src/database/database.service';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { findProductIdQuery } from './query/product-find-id.query';
import { ProductFindDto } from './dto/product-find.dto';
import { ProductFindIdDto } from './dto/product-find_id.dto';
import { ProductCreateDto } from './dto/product-create.dto';
import { createProductQuery } from './query/product-create.query';
import {
  SpProductFindDataType,
  SpProductFindIdDataType,
  SpProductPdvFindDataType,
  SpProductWebFindDataType,
  SpProductWebFindIdDataType,
  SpResultRecordCreateType,
  SpResultRecordUpdateType,
} from './types/product.type';

import { ProductWebFindIdDto } from './dto/product-web-find-id.dto';
import { ProductWebFindDto } from './dto/product-web-find.dto';
import { ProductPdvFindDto } from './dto/product-pdv-find.dto';
import { ProductUpdGeneralDto } from './dto/product-upd-general.dto';
import { ProductUpdNameDto } from './dto/product-upd-name.dto';
import { ProductUpdTypeDto } from './dto/product-upd-type.dto';
import { ProductUpdBrandDto } from './dto/product-upd-brand.dto';
import { ProductUpdPriceDto } from './dto/product-upd-price.dto';
import { ProductUpdStockDto } from './dto/product-upd-stock.dto';
import { ProductFlagsDto } from './dto/product-upd-flags.dto';
import { ProductUpdTaxValuesDto } from './dto/product-upd_tax-values.dto';
import { ProductUpdDescriptionDto } from './dto/product-upd-description.dto';
import { ProductUpdCaracteristicsDto } from './dto/product-upd-caracteristics.dto';
import { ProductUpdShortDescriptionDto } from './dto/product-upd-Short-description.dto';
import { ProductUpdVariouDto } from './dto/product-upd-variou.dto';

import { webFindIdProductQuery } from './query/product-web-find-id.query';
import { webFindProductQuery } from './query/product-web-find.query';
import { pdvFindProductQuery } from './query/product-pdv-find.query';
import { updGeneralProductQuery } from './query/product-upd-general.query';
import { updNameProductQuery } from './query/product-upd-name.query';
import { updTypeProductQuery } from './query/product-upd-type.query';
import { updBrandProductQuery } from './query/product-upd-brand.query';
import { updStockProductQuery } from './query/product-upd-stock.query';
import { updPriceProductQuery } from './query/product-upd-price.query';
import { updFlagsProductQuery } from './query/product-upd-flags.query';
import { updCaracteristicsProductQuery } from './query/product-upd-caracteristics.query';
import { updTaxValuesProductQuery } from './query/product-upd-tax-values.query';
import { ProductUpdShortDescriptionQuery } from './query/product-upd-Short-description.query';
import { updVariouProductQuery } from './query/product-upd-variou.query';
import { updDescriptionProductQuery } from './query/product-upd-description.query';

@Injectable()
export class ProductService {
  constructor(private readonly dbService: DatabaseService) {}

  create() {
    return 'This action adds a new product';
  }

  async tskProductCreateV2(dataJsonDto: ProductCreateDto) {
    try {
      const queryString = createProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordCreateType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductFindIdV2(dataJsonDto: ProductFindIdDto) {
    try {
      const queryString = findProductIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpProductFindIdDataType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_PRODUTO ?? 0;

      const DefaultFeedback = resultData[2];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (recordId === 0) {
        Feedback = 'Product not found';
      }

      return resultQueryData<SpProductFindIdDataType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductFindV2(dataJsonDto: ProductFindDto) {
    try {
      const queryString = findProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpProductFindDataType;

      console.log('resultData', resultData);

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_PRODUTO ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (recordId === 0) {
        Feedback = 'Product not found';
      }

      return resultQueryData<SpProductFindDataType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductWebFindIdV2(dataJsonDto: ProductWebFindIdDto) {
    try {
      const queryString = webFindIdProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpProductWebFindIdDataType;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_PRODUTO ?? 0;

      const DefaultFeedback = resultData[2];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (recordId === 0) {
        Feedback = 'Product not found';
      }

      return resultQueryData<SpProductWebFindIdDataType>(
        recordId,
        errorId,
        Feedback,
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
  async tskProductWebFindV2(dataJsonDto: ProductWebFindDto) {
    try {
      const queryString = webFindProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpProductWebFindDataType;

      console.log('resultData', resultData);

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_PRODUTO ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (recordId === 0) {
        Feedback = 'Product not found';
      }

      return resultQueryData<SpProductWebFindDataType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductPdvFindV2(dataJsonDto: ProductPdvFindDto) {
    try {
      const queryString = pdvFindProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpProductPdvFindDataType;

      console.log('resultData', resultData);

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_PRODUTO ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (recordId === 0) {
        Feedback = 'Product not found';
      }

      return resultQueryData<SpProductPdvFindDataType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductUpdGeneralV2(dataJsonDto: ProductUpdGeneralDto) {
    try {
      const queryString = updGeneralProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductUpdNameV2(dataJsonDto: ProductUpdNameDto) {
    try {
      const queryString = updNameProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductUpdTypeV2(dataJsonDto: ProductUpdTypeDto) {
    try {
      const queryString = updTypeProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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
  async tskProductUpdBrandV2(dataJsonDto: ProductUpdBrandDto) {
    try {
      const queryString = updBrandProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductUpdStockV2(dataJsonDto: ProductUpdStockDto) {
    try {
      const queryString = updStockProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductUpdPriceV2(dataJsonDto: ProductUpdPriceDto) {
    try {
      const queryString = updPriceProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductUpdFlagsV2(dataJsonDto: ProductFlagsDto) {
    try {
      const queryString = updFlagsProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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
  async tskProductUpdCaracteristicsV2(
    dataJsonDto: ProductUpdCaracteristicsDto,
  ) {
    try {
      const queryString = updCaracteristicsProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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
  async tskProductUpdTaxValuesV2(dataJsonDto: ProductUpdTaxValuesDto) {
    try {
      const queryString = updTaxValuesProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductUpdShortDescriptionV2(
    dataJsonDto: ProductUpdShortDescriptionDto,
  ) {
    try {
      const queryString = ProductUpdShortDescriptionQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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
  async tskProductUpdDescriptionV2(dataJsonDto: ProductUpdDescriptionDto) {
    try {
      const queryString = updDescriptionProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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

  async tskProductUpdVariouV2(dataJsonDto: ProductUpdVariouDto) {
    try {
      const queryString = updVariouProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordUpdateType;

      const DefaultFeedback = resultData[0];
      const qtRecords = DefaultFeedback.length ?? 0;
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      const recordId: number = DefaultFeedback[0]?.sp_return_id ?? 0;

      if (recordId > 0) {
        //TODO: Send instructions by email or WhatsApp
      }
      const Feedback = DefaultFeedback[0]?.sp_message || '';

      return resultQueryData<SpResultRecordUpdateType>(
        recordId,
        errorId,
        Feedback,
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
