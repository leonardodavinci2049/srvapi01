import { Injectable } from '@nestjs/common';

import { findProductQuery } from './query/product_find.query';
import { DatabaseService } from 'src/database/database.service';
import { SpProductIdData, SpResultData } from './types/product.type';
import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { findProductIdQuery } from './query/product-find-id.query';
import { ProductFindDto } from './dto/product-find.dto';
import { ProductFindIdDto } from './dto/product-find_id.dto';

@Injectable()
export class ProductService {
  constructor(private readonly dbService: DatabaseService) {}

  create() {
    return 'This action adds a new product';
  }

  async findProduct(dataJsonDto: ProductFindDto) {
    try {
      const queryString = findProductQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultData;

      const tblRecord = resultData[0];

      const qtRecords: number = tblRecord.length;

      if (qtRecords > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpResultData>(
        qtRecords,
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

  async findProductId(dataJsonDto: ProductFindIdDto) {
    try {
      const queryString = findProductIdQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpProductIdData;

      const tblRecord = resultData[0];

      const qtRecords: number = tblRecord.length;

      if (qtRecords > 0) {
        //TODO: Send instructions by email or WhatsApp
      }

      return resultQueryData<SpProductIdData>(
        qtRecords,
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

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update() {
    return `This action updates a  product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
