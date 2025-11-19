import { IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationSloganUpdDto {
  @IsInt()
  @Type(() => Number)
  id: number;

  @IsInt()
  @Type(() => Number)
  systemId: number;

  @IsInt()
  @Type(() => Number)
  storeId: number;

  @IsString()
  SLOGAN: string;

  @IsInt()
  @Type(() => Number)
  userId: number;
}
