import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { ProductFindPdvAllV2Dto } from './dto/product-find-pdv-all-v2.dto';
import { ProductFindPdvIdV2Dto } from './dto/product-find-pdv-id-v2.dto';

@Injectable()
export class ProductPdvService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new productPdv';
  }

  async taskProductFindPdvAllV2(dataJsonDto: ProductFindPdvAllV2Dto) {}
  async taskProductFindPdvIdV2(dataJsonDto: ProductFindPdvIdV2Dto) {}
}
