import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CarrierService } from './carrier.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { CarrierCreateV2Dto } from './dto/carrier-create-v2.dto';
import { CarrierFindAllV2Dto } from './dto/carrier-find-all-v2.dto';
import { CarrierFindIdV2Dto } from './dto/carrier-find-id-v2.dto';
import { CarrierUpdateV2Dto } from './dto/carrier-update-v2.dto';
import { CarrierDeleteV2Dto } from './dto/carrier-delete-v2.dto';

@Controller('carrier')
export class CarrierController {
  constructor(private readonly carrierService: CarrierService) {}

  @UseGuards(AuthGuard)
  @Post('v2/Carrier-create')
  carrierCreateV2(@Body() dataJsonDto: CarrierCreateV2Dto) {
    return this.carrierService.taskCarrierCreateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Carrier-find-all')
  carrierFindAllV2(@Body() dataJsonDto: CarrierFindAllV2Dto) {
    return this.carrierService.taskCarrierFindAllV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Carrier-find-id')
  carrierFindIdV2(@Body() dataJsonDto: CarrierFindIdV2Dto) {
    return this.carrierService.taskCarrierFindIdV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Carrier-update')
  carrierUpdateV2(@Body() dataJsonDto: CarrierUpdateV2Dto) {
    return this.carrierService.taskCarrierUpdateV2(dataJsonDto);
  }

  @UseGuards(AuthGuard)
  @Post('v2/Carrier-delete')
  carrierDeleteV2(@Body() dataJsonDto: CarrierDeleteV2Dto) {
    return this.carrierService.taskCarrierDeleteV2(dataJsonDto);
  }
}
