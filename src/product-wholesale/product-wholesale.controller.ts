import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductWholesaleService } from './product-wholesale.service';
import { CreateProductWholesaleDto } from './dto/create-product-wholesale.dto';
import { UpdateProductWholesaleDto } from './dto/update-product-wholesale.dto';

@Controller('product-wholesale')
export class ProductWholesaleController {
  constructor(private readonly productWholesaleService: ProductWholesaleService) {}

  @Post()
  create(@Body() createProductWholesaleDto: CreateProductWholesaleDto) {
    return this.productWholesaleService.create(createProductWholesaleDto);
  }

  @Get()
  findAll() {
    return this.productWholesaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productWholesaleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductWholesaleDto: UpdateProductWholesaleDto) {
    return this.productWholesaleService.update(+id, updateProductWholesaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productWholesaleService.remove(+id);
  }
}
