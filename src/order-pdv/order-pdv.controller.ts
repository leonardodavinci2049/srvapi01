import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { OrdersPdvFindAllDto } from './dto/orders-pdv-find-all.dto';
import { OrdersPdvFindIdDto } from './dto/orders-pdv-find-id.dto';
import { OrderPdvService } from './order-pdv.service';

@Controller('order-pdv')
export class OrderPdvController {
  constructor(private readonly service: OrderPdvService) {}

  @Get()
  getHello() {
    return {
      name: 'Wholesale API',
      status: 'online',
      version: '1.0.1',
      documentation: '/',
      timestamp: new Date().toISOString(),
      endpoints: { base: '/api', auth: '/api/order-pdv' },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/orders-pdv-find-all')
  ordersPdvFindAllV2(@Body() dataJsonDto: OrdersPdvFindAllDto) {
    return this.service.taskOrdersPdvFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/orders-pdv-find-id')
  ordersPdvFindIdV2(@Body() dataJsonDto: OrdersPdvFindIdDto) {
    return this.service.taskOrdersPdvFindIdV2(dataJsonDto);
  }
}
