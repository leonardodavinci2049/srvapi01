import { PartialType } from '@nestjs/swagger';
import { CreateTaxonomyWebDto } from './create-taxonomy-web.dto';

export class UpdateTaxonomyWebDto extends PartialType(CreateTaxonomyWebDto) {}
