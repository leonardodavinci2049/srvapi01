import { Injectable } from '@nestjs/common';
import { ProductUpdCharacteristicsV3Dto } from './dto/product-upd-characteristics-v3.dto';
import { ProductUpdFlagsV3Dto } from './dto/product-upd-flags-v3.dto';
import { ProductUpdGeneralV3Dto } from './dto/product-upd-general-v3.dto';
import { ProductUpdMetadataV3Dto } from './dto/product-upd-metadata-v3.dto';
import { ProductUpdPriceV3Dto } from './dto/product-upd-price-v3.dto';
import { ProductUpdTaxValuesV3Dto } from './dto/product-upd-tax-values-v3.dto';

@Injectable()
export class ProductUpdateService {
  create() {
    return 'This action adds a new productUpdate';
  }

  async taskproductUpdCharacteristicsV3(
    dataJsonDto: ProductUpdCharacteristicsV3Dto,
  ) {}

  async taskproductUpdFlagsV3(dataJsonDto: ProductUpdFlagsV3Dto) {}

  async taskproductUpdGeneralV3(dataJsonDto: ProductUpdGeneralV3Dto) {}

  async taskproductUpdMetadataV3(dataJsonDto: ProductUpdMetadataV3Dto) {}

  async taskproductUpdPriceV3(dataJsonDto: ProductUpdPriceV3Dto) {}

  async taskproductUpdTaxValuesV3(dataJsonDto: ProductUpdTaxValuesV3Dto) {}
}
