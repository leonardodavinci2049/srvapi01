import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { PurchasingService } from './purchasing.service';

import { PurchasingFindManagerAllDto } from './dto/purchasing-find-manager-all.dto';
import { PurchasingFindManagerIdDto } from './dto/purchasing-find-manager-id.dto';

@Controller('purchasing')
export class PurchasingController {
  constructor(private readonly purchasingService: PurchasingService) {}

  @Get()
  getHello() {
    return {
      name: 'Wholesale API',
      status: 'online',
      version: '1.0.1',
      documentation: '/',
      timestamp: new Date().toISOString(),
      endpoints: {
        base: '/api',
        auth: '/api/purchasing',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/purchasing-find-manager-all')
  purchasingFindManagerAll(@Body() dataJsonDto: PurchasingFindManagerAllDto) {
    return this.purchasingService.taskPurchasingFindManagerAll(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/purchasing-find-manager-id')
  purchasingFindManagerId(@Body() dataJsonDto: PurchasingFindManagerIdDto) {
    return this.purchasingService.taskPurchasingFindManagerId(dataJsonDto);
  }
}
