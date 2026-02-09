import { Injectable } from '@nestjs/common';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { SpResultTaxonomyFindIdData } from './types/order-sales.type';

import { OrderFindCoSellerIdDto } from './dto/order-find-co-seller-id.dto';
import { OrderFindCoDeliveryIdDto } from './dto/order-find-co-delivery-id.dto';
import { OrderFindCoCustomerIdDto } from './dto/order-find-co-customer-id.dto';
import { OrderFindCoCarrierIdDto } from './dto/order-find-co-carrier-id.dto';
import { OrderFindCoEquipmentIdDto } from './dto/order-find-co-equipment-id.dto';
import { OrderFindCoHistoryIdDto } from './dto/order-find-co-history-id.dto';
import { OrderFindCoNfIdDto } from './dto/order-find-co-nf-id.dto';
import { OrderFindCoPgFormaIdDto } from './dto/order-find-co-pg-forma-id.dto';
import { OrderFindCoProtocolIdDto } from './dto/order-find-co-protocol-id.dto';
import { OrderFindCoSellerFindIdDto } from './dto/order-find-co-seller-find-id.dto';
import { OrderFindCoSummaryIdDto } from './dto/order-find-co-summary-id.dto';
import { OrdersFindDashboardIdDto } from './dto/orders-find-dashboard-id.dto';

import { OrderFindCoCarrierIdQuery } from './query/order-find-co-carrier-id.query';

import { OrderFindCoCustomerIdQuery } from './query/order-find-co-customer-id.query';
import { OrderFindCoDeliveryIdQuery } from './query/order-find-co-delivery-id.query';
import { OrderFindCoEquipmentIdQuery } from './query/order-find-co-equipment-id.query';
import { OrderFindCoHistoryIdQuery } from './query/order-find-co-history-id.query';
import { OrderFindCoNfIdQuery } from './query/order-find-co-nf-id.query';
import { OrderFindCoPgFormaIdQuery } from './query/order-find-co-pg-forma-id.query';
import { OrderFindCoProtocolIdQuery } from './query/order-find-co-protocol-id.query';
import { OrderFindCoSellerFindIdQuery } from './query/order-find-co-seller-find-id.query';
import { OrderFindCoSellerIdQuery } from './query/order-find-co-seller-id.query';
import { OrderFindCoSummaryIdQuery } from './query/order-find-co-summary-id.query';
import { OrdersFindDashboardIdQuery } from './query/orders-find-dashboard-id.query';

@Injectable()
export class OrderSalesService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskOrderFindCoCarrierIdV2(dataJsonDto: OrderFindCoCarrierIdDto) {
    try {
      const queryString = OrderFindCoCarrierIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoCustomerIdV2(dataJsonDto: OrderFindCoCustomerIdDto) {
    try {
      const queryString = OrderFindCoCustomerIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoDeliveryIdV2(dataJsonDto: OrderFindCoDeliveryIdDto) {
    try {
      const queryString = OrderFindCoDeliveryIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoEquipmentIdV2(dataJsonDto: OrderFindCoEquipmentIdDto) {
    try {
      const queryString = OrderFindCoEquipmentIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoHistoryIdV2(dataJsonDto: OrderFindCoHistoryIdDto) {
    try {
      const queryString = OrderFindCoHistoryIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoNfIdV2(dataJsonDto: OrderFindCoNfIdDto) {
    try {
      const queryString = OrderFindCoNfIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoPgFormaIdV2(dataJsonDto: OrderFindCoPgFormaIdDto) {
    try {
      const queryString = OrderFindCoPgFormaIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoProtocolIdV2(dataJsonDto: OrderFindCoProtocolIdDto) {
    try {
      const queryString = OrderFindCoProtocolIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoSellerFindIdV2(dataJsonDto: OrderFindCoSellerFindIdDto) {
    try {
      const queryString = OrderFindCoSellerFindIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoSellerIdV2(dataJsonDto: OrderFindCoSellerIdDto) {
    try {
      const queryString = OrderFindCoSellerIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrderFindCoSummaryIdV2(dataJsonDto: OrderFindCoSummaryIdDto) {
    try {
      const queryString = OrderFindCoSummaryIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskOrdersFindDashboardIdV2(dataJsonDto: OrdersFindDashboardIdDto) {
    try {
      const queryString = OrdersFindDashboardIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultTaxonomyFindIdData;

      return resultData;

      /* 
      return processProcedureResultMutation(
        resultData as unknown[],
        'Order Oper add item failed',
      ); */
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
