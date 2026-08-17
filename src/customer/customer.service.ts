import { Injectable } from '@nestjs/common';
import { processProcedureResultMutation } from 'src/core/process-result/process-procedure-result.mutation';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { processSqlResultQuery } from 'src/core/process-result/process-sql-result.query';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { CostumerCreateDto } from './dto/costumer-create.dto';
import { CostumerCreateManagerDto } from './dto/costumer-create-manager.dto';
import { CostumerFindAllDto } from './dto/costumer-find-all.dto';
import { CostumerFindIdDto } from './dto/costumer-find-id.dto';
import { CostumerFindManagerAllV2Dto } from './dto/costumer-find-manager-all-v2.dto';
import { CostumerFindManagerIdDto } from './dto/costumer-find-manager-id.dto';
import { CostumerFindPdvIdDto } from './dto/costumer-find-pdv-id.dto';
import { CustomerFindLatestProductsDto } from './dto/customer-find-latest-products.dto';
import { CustomerFindSearchV2Dto } from './dto/customer-find-search-v2.dto';
import { CostumerCreateQuery } from './query/costumer-create.query';
import { CostumerCreateManagerQuery } from './query/costumer-create-manager.query';
import { CostumerFindAllQuery } from './query/costumer-find-all.query';
import { CostumerFindIdQuery } from './query/costumer-find-id.query';
import { CostumerFindManagerAllV2Query } from './query/costumer-find-manager-all-v2.query';
import { CostumerFindManagerIdQuery } from './query/costumer-find-manager-id.query';
import { CostumerFindPdvIdQuery } from './query/costumer-find-pdv-id.query';
import { CustomerFindLatestProductsQuery } from './query/customer-find-latest-products.query';
import { CustomerFindSearchV2Query } from './query/customer-find-search-v2.query';
import {
  SpResultCustomerFindAllData,
  SpResultCustomerFindIdData,
  SpResultCustomerFindManagerAllData,
  SpResultCustomerFindManagerIdData,
  SpResultCustomerFindPdvIdData,
  SpResultCustomerLatestProductsFindAllData,
  SpResultRecordCreateType,
  TblCustomerFindSearch,
} from './types/costumer.type';

@Injectable()
export class CustomerService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskCustomerCreateV2(dataJsonDto: CostumerCreateDto) {
    try {
      const queryString = CostumerCreateQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(
        resultData,
        'Customer create failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCustomerCreateManagerV2(dataJsonDto: CostumerCreateManagerDto) {
    try {
      const queryString = CostumerCreateManagerQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultRecordCreateType;

      return processProcedureResultMutation(
        resultData,
        'Customer create manager failed',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCustomerFindAllV2(dataJsonDto: CostumerFindAllDto) {
    try {
      const queryString = CostumerFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCustomerFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Customer find All'],
        'Customer find Allnot found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCustomerSearchAllV2(dataJsonDto: CustomerFindSearchV2Dto) {
    try {
      const { queryString, queryParams } =
        CustomerFindSearchV2Query(dataJsonDto);

      const resultData =
        await this.dbService.selectExecute<TblCustomerFindSearch>(
          queryString,
          queryParams,
        );

      return processSqlResultQuery(
        resultData,
        'Customer find All',
        'Customer find All not found',
        'Dados carregados com sucesso.',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCustomerFindManagerAllV2(dataJsonDto: CostumerFindManagerAllV2Dto) {
    try {
      const queryString = CostumerFindManagerAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCustomerFindManagerAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Customer find manager All'],
        'Customer find manager All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCustomerFindManagerIdV2(dataJsonDto: CostumerFindManagerIdDto) {
    try {
      const queryString = CostumerFindManagerIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCustomerFindManagerIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Customer Information', 'Seller Information'],
        'Customer Information not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCustomerFindPdvIdV2(dataJsonDto: CostumerFindPdvIdDto) {
    try {
      const queryString = CostumerFindPdvIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCustomerFindPdvIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Customer Information', 'Seller Information'],
        'Customer Information not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCustomerFindByIdV2(dataJsonDto: CostumerFindIdDto) {
    try {
      const queryString = CostumerFindIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCustomerFindIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Customer Information', 'Seller Information'],
        'Order Items not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskCustomerLatestproductsFindAllV2(
    dataJsonDto: CustomerFindLatestProductsDto,
  ) {
    try {
      const queryString = CustomerFindLatestProductsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultCustomerLatestProductsFindAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Customer Latest Products'],
        'Customer Latest Products not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
