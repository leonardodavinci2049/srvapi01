import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductPdvService } from './product-pdv.service';
import { CreateProductPdvDto } from './dto/create-product-pdv.dto';
import { UpdateProductPdvDto } from './dto/update-product-pdv.dto';

@Controller('product-pdv')
export class ProductPdvController {
  constructor(private readonly productPdvService: ProductPdvService) {}

  @Post()
  create(@Body() createProductPdvDto: CreateProductPdvDto) {
    return this.productPdvService.create(createProductPdvDto);
  }

  @Get()
  findAll() {
    return this.productPdvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPdvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductPdvDto: UpdateProductPdvDto) {
    return this.productPdvService.update(+id, updateProductPdvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPdvService.remove(+id);
  }
}
