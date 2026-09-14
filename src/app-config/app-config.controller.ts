import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { AppConfigService } from './app-config.service';
import { AppConfigFindAllV2Dto } from './dto/app-config-find-all-v2.dto';
import { AppMenuFindTypeV2Dto } from './dto/app-menu-find-type-v2.dto';

@Controller('app-config')
export class AppConfigController {
  constructor(private readonly appConfigService: AppConfigService) {}

  @UseGuards(AuthGuard)
  @Post('v2/app-config-find-all')
  appConfigFindAllV2(@Body() dataJsonDto: AppConfigFindAllV2Dto) {
    return this.appConfigService.taskAppConfigFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/app-menu-find-type')
  appMenuFindTypeV2(@Body() dataJsonDto: AppMenuFindTypeV2Dto) {
    return this.appConfigService.taskAppMenuFindTypeV2(dataJsonDto);
  }
}
