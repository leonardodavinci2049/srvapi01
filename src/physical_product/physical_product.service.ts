import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { PhysicalProductFindAllV2Dto } from './dto/physical-product-find-all-v2.dto';
import { OrderItemFindIdCustomerV2Dto } from './dto/order-item-find-id-customer-v2.dto';
import { OrderItemFindAllCustomerV2Dto } from './dto/order-item-find-all-customer-v2.dto';
import { PhysicalProductWarrantyIdV2Dto } from './dto/physical-product-warranty-id-v2.dto';
import { PhysicalProductWarrantyIdCustomerV2Dto } from './dto/physical-product-warranty-id-customer-v2.dto';
import { PhysicalProductWarrantyMovV2Dto } from './dto/physical-product-warranty-mov-v2.dto';
import { PhysicalProductWarrantyMovCustomerV2Dto } from './dto/physical-product-warranty-mov-customer-v2.dto';


import { OrderItemFindAllCustomerV2Query } from './query/order-item-find-all-customer-v2.query';
import { OrderItemFindIdCustomerV2Query } from './query/order-item-find-id-customer-v2.query';
import { PhysicalProductFindAllV2Query } from './query/physical-product-find-all-v2.query';
import { PhysicalProductWarrantyIdCustomerV2Query } from './query/physical-product-warranty-id-customer-v2.query';
import { PhysicalProductWarrantyIdV2Query } from './query/physical-product-warranty-id-v2.query';
import { PhysicalProductWarrantyMovCustomerV2Query } from './query/physical-product-warranty-mov-customer-v2.query';
import { PhysicalProductWarrantyMovV2Query } from './query/physical-product-warranty-mov-v2.query';
import { SpOrderItemFindAllCustomerV2DataType, SpOrderItemFindIdCustomerV2DataType, SpPhysicalProductFindAllV2DataType, SpPhysicalProductWarrantyIdCustomerV2DataType, SpPhysicalProductWarrantyIdV2DataType, SpPhysicalProductWarrantyMovCustomerV2DataType, SpPhysicalProductWarrantyMovV2DataType } from './types/physical_product.type';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';


@Injectable()
export class PhysicalProductService {

  constructor(private readonly dbService: DatabaseService) {}

  async taskOrderItemFindAllCustomerV2(dataJsonDto: OrderItemFindAllCustomerV2Dto) {
    try {
      const queryString = OrderItemFindAllCustomerV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpOrderItemFindAllCustomerV2DataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['Order Item find all'],
        'Order Item find all not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderItemFindIdCustomerV2(dataJsonDto: OrderItemFindIdCustomerV2Dto) {
    try {
      const queryString = OrderItemFindIdCustomerV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpOrderItemFindIdCustomerV2DataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['Order Item find Id '],
        'Order Item find Id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskPhysicalProductFindAllV2(dataJsonDto: PhysicalProductFindAllV2Dto) {
    try {
      const queryString = PhysicalProductFindAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpPhysicalProductFindAllV2DataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['Physical Product find all'],
        'Physical Product find all not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskPhysicalProductWarrantyIdCustomerV2(dataJsonDto: PhysicalProductWarrantyIdCustomerV2Dto) {
    try {
      const queryString = PhysicalProductWarrantyIdCustomerV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpPhysicalProductWarrantyMovCustomerV2DataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['Warranty mov customer'],
        'Warranty mov customer not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskPhysicalProductWarrantyIdV2(dataJsonDto: PhysicalProductWarrantyIdV2Dto) {
    try {
      const queryString = PhysicalProductWarrantyIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpPhysicalProductWarrantyIdCustomerV2DataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['warranty find id customer'],
        'warranty find id customer not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskPhysicalProductWarrantyMovCustomerV2(dataJsonDto: PhysicalProductWarrantyMovCustomerV2Dto) {
    try {
      const queryString = PhysicalProductWarrantyMovCustomerV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpPhysicalProductWarrantyIdV2DataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['warranty find id'],
        'warranty find id not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async taskPhysicalProductWarrantyMovV2(dataJsonDto: PhysicalProductWarrantyMovV2Dto) {
    try {
      const queryString = PhysicalProductWarrantyMovV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpPhysicalProductWarrantyMovV2DataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['Warranty mov'],
        'Warranty mov not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

}