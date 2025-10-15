import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { FindCategoryMenuDto } from './dto/find-category.menu.dto ';
import { FindCategoryIdDto } from './dto/id-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create() {
    return this.categoryService.create();
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post('v1/find-category-menu')
  findProduct(@Body() dataJsonDto: FindCategoryMenuDto) {
    return this.categoryService.findCategoryMenu(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v1/find-category-id')
  findCategoryId(@Body() dataJsonDto: FindCategoryIdDto) {
    return this.categoryService.findCategoryId(dataJsonDto);
  }

  @Patch(':id')
  update() {
    return this.categoryService.update();
  }

  @Delete(':id')
  remove() {
    return this.categoryService.remove();
  }
}
