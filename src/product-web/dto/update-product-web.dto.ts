import { PartialType } from '@nestjs/swagger';
import { CreateProductWebDto } from './create-product-web.dto';

export class UpdateProductWebDto extends PartialType(CreateProductWebDto) {}
