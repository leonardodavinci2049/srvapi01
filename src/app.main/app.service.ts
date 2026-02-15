import { Injectable } from '@nestjs/common';
import { ApiInfoDto } from './dto/api-info.dto';

@Injectable()
export class AppService {
  getHello(): ApiInfoDto {
    return {
      name: 'Wholesale API',
      status: 'online',
      version: '1.0.0',
      documentation: '/api/docs',
      timestamp: new Date().toISOString(),
      endpoints: {
        base: '/api',
        auth: '/api/auth',
        users: '/api/users',
      },
    };
  }

  getRedirectUrl(): string {
    return '/';
  }
}
