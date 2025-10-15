import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { CartService } from './cart.service';

import { AuthGuard } from 'src/core/guards/auth.guard';

import { CreateCartItemAddDto } from './dto/create-cart-item-Add.dto';
import { DeleteCartItemDto } from './dto/delete-cart-item.dto';

import { UpdateCartQtItemDto } from './dto/update-cart-qt-item.dto';
import { CreateCartOrderDto } from './dto/create-cart-order.dto';
import { FindCartItemsDto } from './dto/find-cart_items.dto';
import { CartClearAllDto } from './dto/cart-clear-all.dto';
import { CartQuantityItemsDto } from './dto/cart-quantity-items.dto';
import { CartViewCustomerDto } from './dto/cart-view-customer.dto';
import { CartCheckCustomerDto } from './dto/cart-check-customer.dto';

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
  cartItemAddV1(@Body() dataJsonDto: CreateCartItemAddDto) {
    return this.cartService.tskCartItemAddV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-items-select')
  cartItemSelectV1(@Body() dataJsonDto: FindCartItemsDto) {
    return this.cartService.tskCartItemSelectV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-item-qt-update')
  cartItemQtUpdateV1(@Body() dataJsonDto: UpdateCartQtItemDto) {
    return this.cartService.tskCartItemQtUpdateV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-item-delete')
  cartItemDeleteV1(@Body() dataJsonDto: DeleteCartItemDto) {
    return this.cartService.tskCartItemDeleteV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-quantity-items')
  CartQuantityItemsV1(@Body() dataJsonDto: CartQuantityItemsDto) {
    return this.cartService.tskCartQuantityItemsV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-clear-all')
  CartClearAllV1(@Body() dataJsonDto: CartClearAllDto) {
    return this.cartService.tskCartClearAllV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-check-customer')
  CartCheckCustomerV1(@Body() dataJsonDto: CartCheckCustomerDto) {
    return this.cartService.tskCartCheckCustomerV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-view-customer')
  CartViewCustomerV1(@Body() dataJsonDto: CartViewCustomerDto) {
    return this.cartService.tskCartViewCustomerV1(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/cart-order-create')
  cartOrderCreateV1(@Body() dataJsonDto: CreateCartOrderDto) {
    return this.cartService.tskCartOrderCreateV1(dataJsonDto);
  }
}
