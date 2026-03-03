import { Injectable } from '@nestjs/common';
import { ProductCreateV3Dto } from './dto/product-create-v3.dto';
import { ProductFindAllV3Dto } from './dto/product-find-all-v3.dto';
import { ProductFindIdV3Dto } from './dto/product-find-id-v3.dto';

@Injectable()
export class ProductBaseService {
  create() {
    return 'This action adds a new productBase';
  }

async taskproductCreateV3(dataJsonDto: ProductCreateV3Dto) {}
async taskproductFindAllV3(dataJsonDto: ProductFindAllV3Dto) {}
async taskproductFindIdV3(dataJsonDto: ProductFindIdV3Dto) {}




}
