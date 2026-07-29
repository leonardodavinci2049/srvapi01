import { Controller, Post, Body, UseGuards } from '@nestjs/common';

import { SellerService } from './seller.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { SellerFindManagerAllV2Dto } from './dto/seller-find-manager-all-v2.dto';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @UseGuards(AuthGuard)
  @Post('v2/seller-find-manager-all')
  sellerFindManagerAllV2(@Body() dataJsonDto: SellerFindManagerAllV2Dto) {
    return this.sellerService.taskSellerFindManagerAllV2(dataJsonDto);
  }
}
