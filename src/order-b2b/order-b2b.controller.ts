import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { OrderB2bService } from './order-b2b.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { OrderFindBudgetCustomerIdV2Dto } from './dto/order-find-budget-customer-id-v2.dto';
import { OrderFindDashboardCustomerIdV2Dto } from './dto/order-find-dashboard-customer-id-v2.dto';
import { OrderItemFindQtV2Dto } from './dto/order-item-find-qt-v2.dto';
import { OrdersStatisticsCustomerV2Dto } from './dto/orders-statistics-customer-v2.dto';
import { OrdersFindLatestV2Dto } from './dto/orders-find-latest-v2.dto';

@Controller('order-b2b')
export class OrderB2bController {
  constructor(private readonly orderB2bService: OrderB2bService) {}

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
        auth: '/api/order-b2b',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-budget-customer-id')
  orderFindBudgetCustomerId(
    @Body() dataJsonDto: OrderFindBudgetCustomerIdV2Dto,
  ) {
    return this.orderB2bService.taskOrderFindBudgetCustomerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-dashboard-customer-id')
  orderFindDashboardCustomerId(
    @Body() dataJsonDto: OrderFindDashboardCustomerIdV2Dto,
  ) {
    return this.orderB2bService.taskOrderFindDashboardCustomerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-item-find-qt')
  orderItemFindQt(@Body() dataJsonDto: OrderItemFindQtV2Dto) {
    return this.orderB2bService.taskOrderItemFindQtV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-latest')
  orderFindLatest(@Body() dataJsonDto: OrdersFindLatestV2Dto) {
    return this.orderB2bService.taskOrdersFindLatestV2(dataJsonDto);
  }


  @UseGuards(AuthGuard)
  @Post('v2/order-statistics-customer')
  orderStatisticsCustomer(@Body() dataJsonDto: OrdersStatisticsCustomerV2Dto) {
    return this.orderB2bService.taskOrdersStatisticsCustomerV2(dataJsonDto);
  }

}
