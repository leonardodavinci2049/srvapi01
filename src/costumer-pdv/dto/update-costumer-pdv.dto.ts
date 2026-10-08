import { PartialType } from '@nestjs/swagger';
import { CreateCostumerPdvDto } from './create-costumer-pdv.dto';

export class UpdateCostumerPdvDto extends PartialType(CreateCostumerPdvDto) {}
