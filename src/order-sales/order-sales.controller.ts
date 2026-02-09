import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OrderSalesService } from './order-sales.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { OrderFindCoCarrierIdDto } from './dto/order-find-co-carrier-id.dto';
import { OrderFindCoCustomerIdDto } from './dto/order-find-co-customer-id.dto';
import { OrderFindCoDeliveryIdDto } from './dto/order-find-co-delivery-id.dto';
import { OrderFindCoEquipmentIdDto } from './dto/order-find-co-equipment-id.dto';
import { OrderFindCoHistoryIdDto } from './dto/order-find-co-history-id.dto';
import { OrderFindCoNfIdDto } from './dto/order-find-co-nf-id.dto';
import { OrderFindCoPgFormaIdDto } from './dto/order-find-co-pg-forma-id.dto';
import { OrderFindCoProtocolIdDto } from './dto/order-find-co-protocol-id.dto';
import { OrderFindCoSellerFindIdDto } from './dto/order-find-co-seller-find-id.dto';
import { OrderFindCoSellerIdDto } from './dto/order-find-co-seller-id.dto';
import { OrderFindCoSummaryIdDto } from './dto/order-find-co-summary-id.dto';
import { OrdersFindDashboardIdDto } from './dto/orders-find-dashboard-id.dto';

@Controller('order-sales')
export class OrderSalesController {
  constructor(private readonly orderSalesService: OrderSalesService) {}

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
        auth: '/api/order-sales',
      },
    };
  }
  @UseGuards(AuthGuard)
  @Post('v2/order-find-dashboard-id')
  OrderFindDashboardIdV2(@Body() dataJsonDto: OrdersFindDashboardIdDto) {
    return this.orderSalesService.taskOrdersFindDashboardIdV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-carrier-id')
  OrderFindCoCarrierIdV2(@Body() dataJsonDto: OrderFindCoCarrierIdDto) {
    return this.orderSalesService.taskOrderFindCoCarrierIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-customer-id')
  OrderFindCoCustomerIdV2(@Body() dataJsonDto: OrderFindCoCustomerIdDto) {
    return this.orderSalesService.taskOrderFindCoCustomerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-delivery-id')
  OrderFindCoDeliveryIdV2(@Body() dataJsonDto: OrderFindCoDeliveryIdDto) {
    return this.orderSalesService.taskOrderFindCoDeliveryIdV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/order-find-equipment-id')
  OrderFindCoEquipmentIdV2(@Body() dataJsonDto: OrderFindCoEquipmentIdDto) {
    return this.orderSalesService.taskOrderFindCoEquipmentIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-history-id')
  OrderFindCoHistoryIdV2(@Body() dataJsonDto: OrderFindCoHistoryIdDto) {
    return this.orderSalesService.taskOrderFindCoHistoryIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-nf-id')
  OrderFindCoNfIdV2(@Body() dataJsonDto: OrderFindCoNfIdDto) {
    return this.orderSalesService.taskOrderFindCoNfIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-pg-forma-id')
  OrderFindCoPgFormaIdV2(@Body() dataJsonDto: OrderFindCoPgFormaIdDto) {
    return this.orderSalesService.taskOrderFindCoPgFormaIdV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-protocol-id')
  OrderFindCoProtocolIdV2(@Body() dataJsonDto: OrderFindCoProtocolIdDto) {
    return this.orderSalesService.taskOrderFindCoProtocolIdV2(dataJsonDto);
  }
  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-seller-find-id')
  OrderFindCoSellerOrderFindIdV2(
    @Body() dataJsonDto: OrderFindCoSellerFindIdDto,
  ) {
    return this.orderSalesService.taskOrderFindCoSellerFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-seller-id')
  OrderFindCoSellerIdV2(@Body() dataJsonDto: OrderFindCoSellerIdDto) {
    return this.orderSalesService.taskOrderFindCoSellerIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-find-co-summary-id')
  OrderFindCoSummaryIdV2(@Body() dataJsonDto: OrderFindCoSummaryIdDto) {
    return this.orderSalesService.taskOrderFindCoSummaryIdV2(dataJsonDto);
  }
}
