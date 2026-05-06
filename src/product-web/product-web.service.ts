import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { ProductWebFindIdV3Dto } from './dto/product-web-find-id-v3.dto';
import { ProductWebFindV3Dto } from './dto/product-web-find-v3.dto';
import { ProductWebSectionsV3Dto } from './dto/product-web-sections-v3.dto';
import {
  SpProductWebFindDataType,
  SpProductWebFindIdDataType,
  SpProductWebSectionsDataType,
} from './types/product-web.type';
import { webFindIdProductQuery } from './query/product-web-find-id-v3.query';
import { webFindProductQuery } from './query/product-web-find-v3.query';
import { webFindProductSectionsQuery } from './query/product-web-sections-v3.query';

@Injectable()
export class ProductWebService {
  constructor(private readonly dbService: DatabaseService) {}

  async tskProductWebFindIdV3(dataJsonDto: ProductWebFindIdV3Dto) {
    try {
      const queryString = webFindIdProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpProductWebFindIdDataType;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Product Details',  'Category Related', 'Related Products', ],
        'Product Details not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
  async tskProductWebFindV3(dataJsonDto: ProductWebFindV3Dto) {
    try {
      const queryString = webFindProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpProductWebFindDataType;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
        ['Product List'],
        'Product List not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async tskProductWebSectionsV3(dataJsonDto: ProductWebSectionsV3Dto) {
    try {
      const queryString = webFindProductSectionsQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpProductWebSectionsDataType;

      return processProcedureResultMultiQuery(
        resultData as unknown[],
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
