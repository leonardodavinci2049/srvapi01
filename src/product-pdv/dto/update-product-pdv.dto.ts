import { PartialType } from '@nestjs/swagger';
import { CreateProductPdvDto } from './create-product-pdv.dto';

export class UpdateProductPdvDto extends PartialType(CreateProductPdvDto) {}
