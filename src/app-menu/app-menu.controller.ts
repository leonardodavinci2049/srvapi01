import { Controller, Get, Post } from '@nestjs/common';
import { AppMenuService } from './app-menu.service';

@Controller('app-menu')
export class AppMenuController {
  constructor(private readonly appMenuService: AppMenuService) {}

  @Get()
  getHello() {
    return {
      name: 'App Menu API',
      status: 'online',
      version: '1.0.1',
      documentation: '/',
      timestamp: new Date().toISOString(),
      endpoints: {
        base: '/api',
        auth: '/api/app-menu',
      },
    };
  }

  @Post()
  create() {
    return this.appMenuService.create();
  }


}
