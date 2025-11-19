import { IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationInternetUpdDto {
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
  @IsOptional()
  EMAIL?: string;

  @IsString()
  @IsOptional()
  SITE?: string;

  @IsString()
  @IsOptional()
  FACEBOOK?: string;

  @IsString()
  @IsOptional()
  INSTAGRAM?: string;

  @IsInt()
  @Type(() => Number)
  userId: number;
}
