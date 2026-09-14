import { Controller, Get, Post } from '@nestjs/common';
import { AppConfigService } from './app-config.service';


@Controller('app-config')
export class AppConfigController {
  constructor(private readonly appConfigService: AppConfigService) {}


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
    return this.appConfigService.create();
  }


}
