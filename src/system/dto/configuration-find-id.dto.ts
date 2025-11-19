import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationFindIdDto {
  @IsInt()
  @Type(() => Number)
  id: number;

  @IsInt()
  @Type(() => Number)
  systemId: number;

  @IsInt()
  @Type(() => Number)
  storeId: number;
}
