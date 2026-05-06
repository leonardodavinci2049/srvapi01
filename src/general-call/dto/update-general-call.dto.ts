import { PartialType } from '@nestjs/swagger';
import { CreateGeneralCallDto } from './create-general-call.dto';

export class UpdateGeneralCallDto extends PartialType(CreateGeneralCallDto) {}
