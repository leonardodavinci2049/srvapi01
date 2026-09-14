import { PartialType } from '@nestjs/swagger';
import { CreateAppMenuDto } from './create-app-menu.dto';

export class UpdateAppMenuDto extends PartialType(CreateAppMenuDto) {}
