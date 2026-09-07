import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { OrdersManagerFindAllDto } from './dto/orders-manager-find-all.dto';
import { OrdersManagerFindIdDto } from './dto/orders-manager-find-id.dto';
import { OrderManagerService } from './order_manager.service';

@Controller('order-manager')
export class OrderManagerController {
  constructor(private readonly orderManagerService: OrderManagerService) {}

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
        auth: '/api/order-manager',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/orders-manager-find-all')
  ordersManagerFindAll(@Body() dataJsonDto: OrdersManagerFindAllDto) {
    return this.orderManagerService.taskOrdersManagerFindAll(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/orders-manager-find-id')
  ordersManagerFindId(@Body() dataJsonDto: OrdersManagerFindIdDto) {
    return this.orderManagerService.taskOrdersManagerFindId(dataJsonDto);
  }
}
