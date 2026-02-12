import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductWebService } from './product-web.service';
import { CreateProductWebDto } from './dto/create-product-web.dto';
import { UpdateProductWebDto } from './dto/update-product-web.dto';

@Controller('product-web')
export class ProductWebController {
  constructor(private readonly productWebService: ProductWebService) {}

  @Post()
  create(@Body() createProductWebDto: CreateProductWebDto) {
    return this.productWebService.create(createProductWebDto);
  }

  @Get()
  findAll() {
    return this.productWebService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productWebService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductWebDto: UpdateProductWebDto) {
    return this.productWebService.update(+id, updateProductWebDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productWebService.remove(+id);
  }
}
