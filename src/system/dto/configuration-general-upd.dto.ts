import { IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationGeneralUpdDto {
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
  NOME_EMPRESA?: string;

  @IsString()
  @IsOptional()
  SLOGAN?: string;

  @IsInt()
  @Type(() => Number)
  userId: number;
}
