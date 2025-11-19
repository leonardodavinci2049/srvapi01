import { IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationCreateDto {
  @IsInt()
  @Type(() => Number)
  ID_SYSTEM_CLIENTE: number;

  @IsInt()
  @Type(() => Number)
  ID_LOJA: number;

  @IsString()
  @IsOptional()
  NOME_EMPRESA?: string;

  @IsString()
  @IsOptional()
  SLOGAN?: string;

  @IsString()
  @IsOptional()
  SOBRE?: string;

  @IsString()
  @IsOptional()
  SOBRE_PAGINA?: string;

  @IsString()
  @IsOptional()
  ENDERECO?: string;

  @IsString()
  @IsOptional()
  TELEFONE?: string;

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

  @IsString()
  @IsOptional()
  HORARIO_FUNCIONAMENTO?: string;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  ID_USUARIO?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  ID_DEPARTAMENTO?: number;
}
