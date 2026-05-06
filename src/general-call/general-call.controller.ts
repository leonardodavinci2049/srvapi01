import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneralCallService } from './general-call.service';
import { CreateGeneralCallDto } from './dto/create-general-call.dto';
import { UpdateGeneralCallDto } from './dto/update-general-call.dto';

@Controller('general-call')
export class GeneralCallController {
  constructor(private readonly generalCallService: GeneralCallService) {}

  @Post()
  create(@Body() createGeneralCallDto: CreateGeneralCallDto) {
    return this.generalCallService.create(createGeneralCallDto);
  }

  @Get()
  findAll() {
    return this.generalCallService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalCallService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneralCallDto: UpdateGeneralCallDto) {
    return this.generalCallService.update(+id, updateGeneralCallDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalCallService.remove(+id);
  }
}
