import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import type { ApiInfoDto } from './dto/api-info.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ApiInfoDto {
    return this.appService.getHello();
  }

  @Get('/docs')
  @Redirect('/', 302) // 302 para redirecionamento temporário
  redirectDocsToRoot() {
    // Redirecionamento temporário para a página estática na raiz
  }
}
