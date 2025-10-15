import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { FindAccountOrdersSummaryDto } from './dto/find-account-orders-summary.dto';
import { FindAccountStatisticsDto } from './dto/find-account-statistics.dto';
import { FindAccountSummaryDto } from './dto/find-account-summary.dto';
import { FindAccountProfileDto } from './dto/find-account-profile.dto';
import { FindAccountOrdersListDto } from './dto/find-account-orders-list.dto';
import { FindAccountPromotionDto } from './dto/find-account-promotion.dto';
import { FindAccountServicesDto } from './dto/find-account_services.dto';
import { FindAccountConfigDto } from './dto/find-account-config.dto';
import { UpdAccountGeneralDto } from './dto/upd-account-general.dto';
import { UpdAccountTypeDto } from './dto/upd-account-type.dto';
import { UpdAccountBusinessDto } from './dto/upd-account-business.dto';
import { UpdAccountPersonalDto } from './dto/upd-account-personal.dto';
import { UpdAccountAddressDto } from './dto/upd-account-address.dto';
import { UpdAccountInternetDto } from './dto/upd-account-internet.dto';
import { UpdAccountThemeDto } from './dto/upd-account-theme.dto';

import { UpdAccountEmailDto } from './dto/upd-account-email.dto';
import { UpdAccountNotificationDto } from './dto/upd-account-notification.dto';
import { UpdAccountPasswordDto } from './dto/upd-account-password.dto';
import { FindAccountOrdersLatestDto } from './dto/find-account-orders-latest.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

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
        auth: '/api/account',
      },
    };
  }
  // https://wserpapp01.comsuporte.com.br/api/cart

  // -- dasbord  ---
  @UseGuards(AuthGuard)
  @Post('v1/find-account-statistics')
  FindAccountStatistics(@Body() dataJsonDto: FindAccountStatisticsDto) {
    return this.accountService.tskAccountStatistics(dataJsonDto);
  }

  // -- dasbord  ---

  @UseGuards(AuthGuard)
  @Post('v1/find-account-orders-latest')
  FindAccountOrdersLatest(@Body() dataJsonDto: FindAccountOrdersLatestDto) {
    return this.accountService.tskAccountOrdersLatest(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v1/find-account-summary')
  FindAccountSummary(@Body() dataJsonDto: FindAccountSummaryDto) {
    return this.accountService.tskAccountSummary(dataJsonDto);
  }

  // -- Profile  ---
  @UseGuards(AuthGuard)
  @Post('v1/find-account-profile')
  FindAccountProfile(@Body() dataJsonDto: FindAccountProfileDto) {
    return this.accountService.tskAccountProfile(dataJsonDto);
  }

  // -- order  ---
  @UseGuards(AuthGuard)
  @Post('v1/find-account-orders-list')
  FindAccountOrdersList(@Body() dataJsonDto: FindAccountOrdersListDto) {
    return this.accountService.tskAccountOrdersList(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v1/find-account-orders-summary')
  FindAccountOrdersSummary(@Body() dataJsonDto: FindAccountOrdersSummaryDto) {
    return this.accountService.tskAccountOrdersSummary(dataJsonDto);
  }

  // -- Promotion  ---
  @UseGuards(AuthGuard)
  @Post('v1/find-account-promotion')
  FindAccountPromotion(@Body() dataJsonDto: FindAccountPromotionDto) {
    return this.accountService.tskAccountPromotion(dataJsonDto);
  }

  // -- Services  ---
  @UseGuards(AuthGuard)
  @Post('v1/find-account-services')
  FindAccountServices(@Body() dataJsonDto: FindAccountServicesDto) {
    return this.accountService.tskAccountServices(dataJsonDto);
  }

  // -- Config  ---
  @UseGuards(AuthGuard)
  @Post('v1/find-account-config')
  FindAccountConfig(@Body() dataJsonDto: FindAccountConfigDto) {
    return this.accountService.tskAccountConfig(dataJsonDto);
  }

  // -- profile ---
  @UseGuards(AuthGuard)
  @Post('v1/upd-account-general')
  UpdAccountGeneral(@Body() dataJsonDto: UpdAccountGeneralDto) {
    return this.accountService.tskAccountGeneral(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v1/upd-account-type')
  UpdAccountType(@Body() dataJsonDto: UpdAccountTypeDto) {
    return this.accountService.tskAccountType(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v1/upd-account-business')
  UpdAccountBusiness(@Body() dataJsonDto: UpdAccountBusinessDto) {
    return this.accountService.tskAccountBusiness(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v1/upd-account-personal')
  UpdAccountPersonal(@Body() dataJsonDto: UpdAccountPersonalDto) {
    return this.accountService.tskAccountPersonal(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v1/upd-account-address')
  UpdAccountAddress(@Body() dataJsonDto: UpdAccountAddressDto) {
    return this.accountService.tskAccountAddress(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/upd-account-internet')
  UpdAccountInternet(@Body() dataJsonDto: UpdAccountInternetDto) {
    return this.accountService.tskAccountInternet(dataJsonDto);
  }

  // -- config ---
  @UseGuards(AuthGuard)
  @Post('v1/upd-account-theme')
  UpdAccountTheme(@Body() dataJsonDto: UpdAccountThemeDto) {
    return this.accountService.tskAccountTheme(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v1/upd-account-notification')
  UpdAccountNotification(@Body() dataJsonDto: UpdAccountNotificationDto) {
    return this.accountService.tskAccountNotification(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v1/upd-account-email')
  UpdAccountEmail(@Body() dataJsonDto: UpdAccountEmailDto) {
    return this.accountService.tskAccountEmail(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v1/upd-account-password')
  UpdAccountPassword(@Body() dataJsonDto: UpdAccountPasswordDto) {
    return this.accountService.tskAccountPassword(dataJsonDto);
  }
}
