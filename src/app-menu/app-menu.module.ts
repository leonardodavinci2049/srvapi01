import { Module } from '@nestjs/common';
import { AppMenuService } from './app-menu.service';
import { AppMenuController } from './app-menu.controller';

@Module({
  controllers: [AppMenuController],
  providers: [AppMenuService],
})
export class AppMenuModule {}
