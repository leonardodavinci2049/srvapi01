import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppMenuService } from './app-menu.service';
import { CreateAppMenuDto } from './dto/create-app-menu.dto';
import { UpdateAppMenuDto } from './dto/update-app-menu.dto';

@Controller('app-menu')
export class AppMenuController {
  constructor(private readonly appMenuService: AppMenuService) {}

  @Post()
  create(@Body() createAppMenuDto: CreateAppMenuDto) {
    return this.appMenuService.create(createAppMenuDto);
  }

  @Get()
  findAll() {
    return this.appMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appMenuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppMenuDto: UpdateAppMenuDto) {
    return this.appMenuService.update(+id, updateAppMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appMenuService.remove(+id);
  }
}
