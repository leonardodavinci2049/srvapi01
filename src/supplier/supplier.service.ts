import { Injectable } from '@nestjs/common';

import { resultQueryData } from 'src/core/utils/globalResult/global.result';
import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { SupplierFindAllDto } from './dto/supplier-find-all.dto';
import { SupplierFindAllQuery } from './query/supplier-find-all.query';
import { SpResultSupplierFindAllData } from './types/supplier.type';

import { DatabaseService } from 'src/database/database.service';
import { SupplierCreateV2Dto } from './dto/supplier-create-v2.dto';
import { SupplierRelCreateV2Dto } from './dto/supplier-rel-create-v2.dto';
import { SupplierFindAllV2Dto } from './dto/supplier-find-all-v2.dto';
import { SupplierRelFindProdAllV2Dto } from './dto/supplier-rel-find-prod-all-v2.dto';
import { SupplierFindIdV2Dto } from './dto/supplier-find-id-v2.dto';
import { SupplierUpdateV2Dto } from './dto/supplier-update-v2.dto';
import { SupplierRelDeleteV2Dto } from './dto/supplier-rel-delete-v2.dto';

@Injectable()
export class SupplierService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskSupplierCreateV2(dataJsonDto: SupplierCreateV2Dto) {}
  async taskSupplierRelCreateV2(dataJsonDto: SupplierRelCreateV2Dto) {}
  async taskSupplierFindAllV2(dataJsonDto: SupplierFindAllV2Dto) {}
  async taskSupplierRelFindProdAllV2(
    dataJsonDto: SupplierRelFindProdAllV2Dto,
  ) {}
  async taskSupplierFindIdV2(dataJsonDto: SupplierFindIdV2Dto) {}
  async taskSupplierUpdateV2(dataJsonDto: SupplierUpdateV2Dto) {}
  async taskSupplierRelDeleteV2(dataJsonDto: SupplierRelDeleteV2Dto) {}

  async tskBrandFindV2(dataJsonDto: SupplierFindAllDto) {
    try {
      const queryString = SupplierFindAllQuery(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultSupplierFindAllData;

      const tblRecords = resultData[0];

      const qtRecords: number = tblRecords.length;

      const tblRecord = tblRecords[0] || 0;

      const recordId: number = tblRecord?.ID_FORNECEDOR ?? 0;

      const DefaultFeedback = resultData[1];
      const errorId: number = DefaultFeedback[0]?.sp_error_id ?? 0;
      let Feedback = DefaultFeedback[0]?.sp_message || '';

      if (qtRecords === 0 && errorId === 0) {
        Feedback = 'Product not found';
      }
      return resultQueryData<SpResultSupplierFindAllData>(
        0,
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
