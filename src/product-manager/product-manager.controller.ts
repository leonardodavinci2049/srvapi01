import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { ProductFindManagerAllV2Dto } from './dto/product-find-manager-all-v2.dto';
import { ProductFindManagerIdV2Dto } from './dto/product-find-manager-id-v2.dto';
import { ProductFindManagerSearchV2Dto } from './dto/product-find-manager-search.dto';
import { ProductFindTaxonomyCandidatesV2Dto } from './dto/product-find-taxonomy-candidates-v2.dto';
import { ProductFindTaxonomyIdV2Dto } from './dto/product-find-taxonomy-id-v2.dto';
import { ProductFindTaxonomyOutsideAllV2Dto } from './dto/product-find-taxonomy-outside-all-v2.dto';
import { ProductManagerService } from './product-manager.service';

@Controller('product-manager')
export class ProductManagerController {
  constructor(private readonly productManagerService: ProductManagerService) {}

  @Post()
  create() {
    return this.productManagerService.create();
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-find-manager-all')
  @HttpCode(HttpStatus.OK)
  productFindManagerAllV2(@Body() dataJsonDto: ProductFindManagerAllV2Dto) {
    return this.productManagerService.taskProductFindManagerAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-find-manager-search')
  @HttpCode(HttpStatus.OK)
  productFindManagerSearchV2(
    @Body() dataJsonDto: ProductFindManagerSearchV2Dto,
  ) {
    return this.productManagerService.taskProductFindManagerSearchV2(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-find-manager-id')
  @HttpCode(HttpStatus.OK)
  productFindManagerIdV2(@Body() dataJsonDto: ProductFindManagerIdV2Dto) {
    return this.productManagerService.taskProductFindManagerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-find-taxonomy-id')
  @HttpCode(HttpStatus.OK)
  productFindTaxonomyIdV2(@Body() dataJsonDto: ProductFindTaxonomyIdV2Dto) {
    return this.productManagerService.taskProductFindTaxonomyIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-find-taxonomy-outside-all')
  @HttpCode(HttpStatus.OK)
  productFindTaxonomyOutsideAllV2(
    @Body() dataJsonDto: ProductFindTaxonomyOutsideAllV2Dto,
  ) {
    return this.productManagerService.taskProductFindTaxonomyOutsideAllV2(
      dataJsonDto,
    );
  }

  @UseGuards(AuthGuard)
  @Post('v2/product-find-taxonomy-candidates')
  @HttpCode(HttpStatus.OK)
  productFindTaxonomyCandidatesV2(
    @Body() dataJsonDto: ProductFindTaxonomyCandidatesV2Dto,
  ) {
    return this.productManagerService.taskProductFindTaxonomyCandidatesV2(
      dataJsonDto,
    );
  }
}
