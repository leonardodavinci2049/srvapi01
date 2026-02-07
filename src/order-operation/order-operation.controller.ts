import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OrderOperationService } from './order-operation.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { OrderOperSendingByEmailIdDto } from './dto/order-oper-sending-by-email-id.dto';

@Controller('order-operation')
export class OrderOperationController {
  constructor(private readonly orderOperationService: OrderOperationService) {}
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
        auth: '/api/order-items',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-oper-sending-by-email')
  OrderOperSendingByEmailV2(@Body() dataJsonDto: OrderOperSendingByEmailIdDto) {
    return this.orderOperationService.tskOrderOperSendingByEmailV2(dataJsonDto);
  }
}
