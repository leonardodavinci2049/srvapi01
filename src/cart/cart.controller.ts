import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { CartService } from './cart.service';

import { AuthGuard } from 'src/core/guards/auth.guard';
import { CartItemAddV1Dto } from './dto/cart-item-add-v1.dto';
import { CartFindIdV1Dto } from './dto/cart-find-id-v1.dto';
import { CartFindQtV1Dto } from './dto/cart-find-qt-v1.dto';
import { CartFindAllV1Dto } from './dto/cart-find-ALL-v1.dto';
import { CartUpdSendToV1Dto } from './dto/cart-upd-send-to-v1.dto';
import { CartItemUpdQtV1Dto } from './dto/cart-item-upd-qt-v1.dto';
import { CartClearAllV1Dto } from './dto/cart-clear-all-v1.dto';
import { CartItemDeleteV1Dto } from './dto/cart-item-delete-v1.dto';
import { CartCloseV1Dto } from './dto/cart-close-v1.dto';


@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

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
        auth: '/api/cart',
      },
    };
  }
  // https://wserpapp01.comsuporte.com.br/api/cart

 
  @UseGuards(AuthGuard)
  @Post('v1/cart-item-add')
cartItemAddV1(@Body() dataJsonDto: CartItemAddV1Dto)  {
    return this.cartService.tskCartItemAddV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-find-id')
 cartFindIdV1(@Body() dataJsonDto: CartFindIdV1Dto) {
    return this.cartService.tskCartFindIdV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-find-qt')
 cartFindQtV1(@Body() dataJsonDto: CartFindQtV1Dto) {
    return this.cartService.tskCartFindQtV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-find-all')
 cartFindAllV1(@Body() dataJsonDto: CartFindAllV1Dto) {
    return this.cartService.tskCartFindAllV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-upd-send-to')
 cartUpdSendToV1(@Body() dataJsonDto: CartUpdSendToV1Dto) {
    return this.cartService.tskCartUpdSendToV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-item-upd-qt')
 cartItemUpdQtV1(@Body() dataJsonDto: CartItemUpdQtV1Dto) {
    return this.cartService.tskCartItemUpdQtV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-clear-all')
 cartClearAllV1(@Body() dataJsonDto: CartClearAllV1Dto) {
    return this.cartService.tskCartClearAllV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-item-delete')
 cartItemDeleteV1(@Body() dataJsonDto: CartItemDeleteV1Dto) {
    return this.cartService.tskCartItemDeleteV1(dataJsonDto);
  }


  @UseGuards(AuthGuard)
  @Post('v1/cart-close')
 cartCloseV1(@Body() dataJsonDto: CartCloseV1Dto) {
    return this.cartService.tskCartCloseV1(dataJsonDto);
  }

  }