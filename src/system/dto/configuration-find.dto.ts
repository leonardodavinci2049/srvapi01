import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationFindDto {
  @IsInt()
  @Type(() => Number)
  systemId: number;

  @IsInt()
  @Type(() => Number)
  storeId: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  limit?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  offset?: number;
}
