import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { CarrierCreateV2Dto } from './dto/carrier-create-v2.dto';
import { CarrierFindAllV2Dto } from './dto/carrier-find-all-v2.dto';
import { CarrierFindIdV2Dto } from './dto/carrier-find-id-v2.dto';
import { CarrierUpdateV2Dto } from './dto/carrier-update-v2.dto';
import { CarrierDeleteV2Dto } from './dto/carrier-delete-v2.dto';
@Injectable()
export class CarrierService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new carrier';
  }

  async taskCarrierCreateV2(dataJsonDto: CarrierCreateV2Dto) {}
  async taskCarrierFindAllV2(dataJsonDto: CarrierFindAllV2Dto) {}
  async taskCarrierFindIdV2(dataJsonDto: CarrierFindIdV2Dto) {}
  async taskCarrierUpdateV2(dataJsonDto: CarrierUpdateV2Dto) {}
  async taskCarrierDeleteV2(dataJsonDto: CarrierDeleteV2Dto) {}
}
