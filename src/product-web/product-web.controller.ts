import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { ProductWebService } from './product-web.service';
import { ProductWebFindIdV3Dto } from './dto/product-web-find-id-v3.dto';
import { ProductWebFindV3Dto } from './dto/product-web-find-v3.dto';
import { ProductWebSectionsV3Dto } from './dto/product-web-sections-v3.dto';

@Controller('product-web')
export class ProductWebController {
  constructor(private readonly productWebService: ProductWebService) {}

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
        auth: '/api/product-web',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-web-find-id')
  findProductWebIdV3(@Body() dataJsonDto: ProductWebFindIdV3Dto) {
    return this.productWebService.tskProductWebFindIdV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-web-find')
  findProductWebV3(@Body() dataJsonDto: ProductWebFindV3Dto) {
    return this.productWebService.tskProductWebFindV3(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v3/product-web-sections')
  findProductWebSectionsV3(@Body() dataJsonDto: ProductWebSectionsV3Dto) {
   return this.productWebService.tskProductWebSectionsV3(dataJsonDto);
  }
}
