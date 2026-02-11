import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
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
        auth: '/api/order-upd',
      },
    };
  }

  @UseGuards(AuthGuard)
  @Post('v2/order-upd-customer-id')
  OrderUpdCustomerIdV2() {
    return this.customerService.create();
  }
}
