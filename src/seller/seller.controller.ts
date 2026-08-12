import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { SellerFindIdDto } from './dto/seller-find-id.dto';
import { SellerFindManagerAllV2Dto } from './dto/seller-find-manager-all-v2.dto';
import { SellerFindManagerIdV2Dto } from './dto/seller-find-manager-id-v2.dto';
import { SellerFindSearchV2Dto } from './dto/seller-find-search-v2.dto';
import { SellerService } from './seller.service';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @UseGuards(AuthGuard)
  @Post('v2/seller-search-all')
  sellerSearchAllV2(@Body() dataJsonDto: SellerFindSearchV2Dto) {
    return this.sellerService.taskSellerSearchAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/seller-find-id')
  sellerFindIdV2(@Body() dataJsonDto: SellerFindIdDto) {
    return this.sellerService.taskSellerFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/seller-find-manager-all')
  sellerFindManagerAllV2(@Body() dataJsonDto: SellerFindManagerAllV2Dto) {
    return this.sellerService.taskSellerFindManagerAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/seller-find-manager-id')
  sellerFindManagerIdV2(@Body() dataJsonDto: SellerFindManagerIdV2Dto) {
    return this.sellerService.taskSellerFindManagerIdV2(dataJsonDto);
  }
}
