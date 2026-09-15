import { Injectable } from '@nestjs/common';
import { processProcedureResultMultiQuery } from 'src/core/process-result/process-procedure-result.query';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';
import { ResultModel } from 'src/core/utils/result.model';
import { DatabaseService } from 'src/database/database.service';
import { ProductWholesaleFindAllV2Dto } from './dto/product-wholesale-find-all-v2.dto';
import { ProductWholesaleFindIdV2Dto } from './dto/product-wholesale-find-id-v2.dto';
import { ProductWholesaleSectionsV2Dto } from './dto/product-wholesale-sections-v2.dto';
import { ProductWholesaleFindAllV2Query } from './query/product-wholesale-find-all-v2.query';
import { ProductWholesaleFindIdV2Query } from './query/product-wholesale-find-id-v2.query';
import { ProductWholesaleSectionsV2Query } from './query/product-wholesale-sections-v2.query';
import {
  SpProductWebFindDataType,
  SpProductWebFindIdDataType,
  SpProductWebSectionsDataType,
} from './types/product-web.type';

@Injectable()
export class ProductWholesaleService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskProductWholesaleFindAllV2(
    dataJsonDto: ProductWholesaleFindAllV2Dto,
  ) {
    try {
      const { queryString, queryParams } =
        ProductWholesaleFindAllV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpProductWebFindDataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product List'],
        'Product List not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskProductWholesaleFindIdV2(dataJsonDto: ProductWholesaleFindIdV2Dto) {
    try {
      const { queryString, queryParams } =
        ProductWholesaleFindIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpProductWebFindIdDataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product Details', 'Category Related', 'Related Products'],
        'Product Details not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskProductWholesaleSectionsV2(
    dataJsonDto: ProductWholesaleSectionsV2Dto,
  ) {
    try {
      const { queryString, queryParams } =
        ProductWholesaleSectionsV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
        queryParams,
      )) as unknown as SpProductWebSectionsDataType;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product Sections'],
        'Product Sections not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
