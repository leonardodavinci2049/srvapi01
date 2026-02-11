import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { CostumerCreateDto } from './dto/costumer-create.dto';
import { CostumerCreateQuery } from './query/costumer-create.query';
import {
  SpResultCustomerFindAllData,
  SpResultCustomerFindIdData,
  SpResultCustomerLatestProductsFindAllData,
  SpResultRecordCreateType,
} from './types/costumer.type';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { CostumerFindAllDto } from './dto/costumer-find-all.dto';
import { CostumerFindAllQuery } from './query/costumer-find-all.query';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';

import { CostumerFindIdDto } from './dto/costumer-find-id.dto';
import { CostumerFindIdQuery } from './query/costumer-find-id.query';
import { CustomerFindLatestProductsQuery } from './query/customer-find-latest-products.query';
import { CustomerFindLatestProductsDto } from './dto/customer-find-latest-products.dto';

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
        resultData as unknown[],
        'Customer create failed',
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
        resultData as unknown[],
        ['Customer find All'],
        'Customer find Allnot found',
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
        resultData as unknown[],
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
        resultData as unknown[],
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
