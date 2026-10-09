import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { ResultModel } from 'src/core/process-result/result.model';
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { DatabaseService } from 'src/database/database.service';
import { CustomerPdvCreateV2Dto } from './dto/customer-pdv-create-v2.dto';
import { CustomerPdvFindAllV2Dto } from './dto/customer-pdv-find-all-v2.dto';
import { CustomerPdvFindIdDto } from './dto/customer-pdv-find-id.dto';
import { CustomerPdvSearchV2Dto } from './dto/customer-pdv-search-v2.dto';
import { CustomerPdvCreateV2Query } from './query/customer-pdv-create-v2.query';
import { CustomerPdvFindAllV2Query } from './query/customer-pdv_find-all-v2.query';
import { CustomerPdvFindIdQuery } from './query/customer-pdv-find-id.query';
import { CustomerPdvSearchV2Query } from './query/customer-pdv-search-v2.query';
import {
  SpResultCustomerPdvCreateData,
  SpResultCustomerPdvFindAllData,
  SpResultCustomerPdvFindIdData,
  SpResultCustomerPdvSearchData,
} from './types/customer-pdv.type';

@Injectable()
export class CustomerPdvService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskCustomerPdvCreateV2(
    dataJsonDto: CustomerPdvCreateV2Dto,
  ): Promise<ResultModel> {
    try {
      const { queryString, queryParams } =
        CustomerPdvCreateV2Query(dataJsonDto);
      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultCustomerPdvCreateData;

      return processProcedureResultMutation(
        resultData,
        'Customer PDV create failed',
      );
    } catch {
      return new ResultModel(
        RESPONSE_CODES.INTERNAL_ERROR,
        MESSAGES.UNKNOWN_ERROR,
        '0',
        [],
        0,
        1,
      );
    }
  }

  async taskCustomerPdvFindAllV2(
    dataJsonDto: CustomerPdvFindAllV2Dto,
  ): Promise<ResultModel> {
    try {
      const { queryString, queryParams } =
        CustomerPdvFindAllV2Query(dataJsonDto);
      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultCustomerPdvFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['customerFindAll'],
        MESSAGES.SEARCH_NO_RESULTS,
      );
    } catch {
      return new ResultModel(
        RESPONSE_CODES.INTERNAL_ERROR,
        MESSAGES.UNKNOWN_ERROR,
        '0',
        { customerFindAll: [] },
        0,
        1,
      );
    }
  }

  async taskCustomerPdvFindIdV2(
    dataJsonDto: CustomerPdvFindIdDto,
  ): Promise<ResultModel> {
    try {
      const { queryString, queryParams } = CustomerPdvFindIdQuery(dataJsonDto);
      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultCustomerPdvFindIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['customerData', 'sellerData'],
        MESSAGES.SEARCH_NO_RESULTS,
      );
    } catch {
      return new ResultModel(
        RESPONSE_CODES.INTERNAL_ERROR,
        MESSAGES.UNKNOWN_ERROR,
        '0',
        { customerData: [], sellerData: [] },
        0,
        1,
      );
    }
  }

  async taskCustomerPdvSearchV2(
    dataJsonDto: CustomerPdvSearchV2Dto,
  ): Promise<ResultModel> {
    try {
      const { queryString, queryParams } =
        CustomerPdvSearchV2Query(dataJsonDto);
      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpResultCustomerPdvSearchData;

      return processProcedureResultMultiQuery(
        resultData,
        ['customerSearch'],
        MESSAGES.SEARCH_NO_RESULTS,
      );
    } catch {
      return new ResultModel(
        RESPONSE_CODES.INTERNAL_ERROR,
        MESSAGES.UNKNOWN_ERROR,
        '0',
        { customerSearch: [] },
        0,
        1,
      );
    }
  }
}
