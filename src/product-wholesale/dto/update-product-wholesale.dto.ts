import { PartialType } from '@nestjs/swagger';
import { CreateProductWholesaleDto } from './create-product-wholesale.dto';

export class UpdateProductWholesaleDto extends PartialType(CreateProductWholesaleDto) {}
