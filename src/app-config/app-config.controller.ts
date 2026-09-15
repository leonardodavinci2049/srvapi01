import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { AppConfigService } from './app-config.service';
import { AppConfigFindAllV2Dto } from './dto/app-config-find-all-v2.dto';
import { AppConfigFindIdV2Dto } from './dto/app-config-find-id-v2.dto';
import { AppConfigUpdGeneralFieldV2Dto } from './dto/app-config-upd-general-field-v2.dto';
import { AppMenuFindTypeV2Dto } from './dto/app-menu-find-type-v2.dto';

@Controller('app-config')
export class AppConfigController {
  constructor(private readonly appConfigService: AppConfigService) {}

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
        auth: '/api/app-config',
      },
    };
  }


  @UseGuards(AuthGuard)
  @Post('v2/app-config-find-all')
  appConfigFindAllV2(@Body() dataJsonDto: AppConfigFindAllV2Dto) {
    return this.appConfigService.taskAppConfigFindAllV2(dataJsonDto);
  }

    @UseGuards(AuthGuard)
  @Post('v2/app-config-find-id')
  appConfigFindIdV2(@Body() dataJsonDto: AppConfigFindIdV2Dto) {
    return this.appConfigService.taskAppConfigFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/app-menu-find-type')
  appMenuFindTypeV2(@Body() dataJsonDto: AppMenuFindTypeV2Dto) {
    return this.appConfigService.taskAppMenuFindTypeV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/app-config-upd-general-field')
  appConfigUpdGeneralFieldV2(
    @Body() dataJsonDto: AppConfigUpdGeneralFieldV2Dto,
  ) {
    return this.appConfigService.taskAppConfigUpdGeneralFieldV2(dataJsonDto);
  }
}
