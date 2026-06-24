import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhysicalProductService } from './physical_product.service';
import { CreatePhysicalProductDto } from './dto/create-physical_product.dto';
import { UpdatePhysicalProductDto } from './dto/update-physical_product.dto';

@Controller('physical-product')
export class PhysicalProductController {
  constructor(private readonly physicalProductService: PhysicalProductService) {}

  @Post()
  create(@Body() createPhysicalProductDto: CreatePhysicalProductDto) {
    return this.physicalProductService.create(createPhysicalProductDto);
  }

  @Get()
  findAll() {
    return this.physicalProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.physicalProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhysicalProductDto: UpdatePhysicalProductDto) {
    return this.physicalProductService.update(+id, updatePhysicalProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.physicalProductService.remove(+id);
  }
}
