import { Injectable } from '@nestjs/common';
import { ProductUpdInlBrandV3Dto } from './dto/product-upd-inl-brand-v3.dto';
import { ProductUpdInlDescriptionV3Dto } from './dto/product-upd-inl-description-v3.dto';
import { ProductUpdInlNameV3Dto } from './dto/product-upd-inl-name-v3.dto';
import { ProductUpdInlPathImageV3Dto } from './dto/product-upd-inl-path-image-v3.dto';
import { ProductUpdInlShortDescriptionV3Dto } from './dto/product-upd-inl-Short-description-v3.dto';
import { ProductUpdInlStockMinV3Dto } from './dto/product-upd-inl-stock-min-v3.dto';
import { ProductUpdInlStockV3Dto } from './dto/product-upd-inl-stock-v3.dto';
import { ProductUpdInlTypeV3Dto } from './dto/product-upd-inl-type-v3.dto';
import { ProductUpdInlVariouV3Dto } from './dto/product-upd-inl-variou-v3.dto';

@Injectable()
export class ProductInlineService {
  create() {
    return 'This action adds a new productInline';
  }

  async taskproductUpdInlBrandV3(dataJsonDto: ProductUpdInlBrandV3Dto) {}
  async taskproductUpdInlDescriptionV3(
    dataJsonDto: ProductUpdInlDescriptionV3Dto,
  ) {}
  async taskproductUpdInlNameV3(dataJsonDto: ProductUpdInlNameV3Dto) {}
  async taskproductUpdInlPathImageV3(
    dataJsonDto: ProductUpdInlPathImageV3Dto,
  ) {}
  async taskproductUpdInlShortDescriptionV3(
    dataJsonDto: ProductUpdInlShortDescriptionV3Dto,
  ) {}
  async taskproductUpdInlStockMinV3(dataJsonDto: ProductUpdInlStockMinV3Dto) {}
  async taskproductUpdInlStockV3(dataJsonDto: ProductUpdInlStockV3Dto) {}
  async taskproductUpdInlTypeV3(dataJsonDto: ProductUpdInlTypeV3Dto) {}
  async taskproductUpdInlVariouV3(dataJsonDto: ProductUpdInlVariouV3Dto) {}
}
