import { IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationAddressUpdDto {
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
  ENDERECO?: string;

  @IsString()
  @IsOptional()
  TELEFONE?: string;

  @IsInt()
  @Type(() => Number)
  userId: number;
}
