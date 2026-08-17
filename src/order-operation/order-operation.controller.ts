import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { OrderOperAddItemDto } from './dto/order-oper-add-item.dto';
import { OrderOperCloseIdDto } from './dto/order-oper-close-id.dto';
import { OrderOperCreateDto } from './dto/order-oper-create.dto';
import { OrderOperCreateManagerDto } from './dto/order-oper-create-manager.dto';
import { OrderOperReverseIdDto } from './dto/order-oper-reverse-id.dto';
import { OrderOperSendingByEmailIdDto } from './dto/order-oper-sending-by-email-id.dto';
import { OrderOperationService } from './order-operation.service';

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
        auth: '/api/order-operation',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-oper-create')
  orderOperCreateV2(@Body() dataJsonDto: OrderOperCreateDto) {
    return this.orderOperationService.taskOrderOperCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-oper-create-manager')
  orderOperCreateManagerV2(@Body() dataJsonDto: OrderOperCreateManagerDto) {
    return this.orderOperationService.taskOrderOperCreateManagerV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-oper-add-item')
  orderOperAddItemV2(@Body() dataJsonDto: OrderOperAddItemDto) {
    return this.orderOperationService.taskOrderOperAddItemV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-oper-close-id')
  orderOperCloseIdV2(@Body() dataJsonDto: OrderOperCloseIdDto) {
    return this.orderOperationService.taskOrderOperCloseIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-oper-reverse-id')
  orderOperReverseIdV2(@Body() dataJsonDto: OrderOperReverseIdDto) {
    return this.orderOperationService.taskOrderOperReverseIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-oper-sending-by-email')
  orderOperSendingByEmailV2(@Body() dataJsonDto: OrderOperSendingByEmailIdDto) {
    return this.orderOperationService.taskOrderOperSendingByEmailV2(
      dataJsonDto,
    );
  }
}
