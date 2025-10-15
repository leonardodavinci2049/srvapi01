import { IsInt, IsOptional, IsString } from 'class-validator';

export class FindProductDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsOptional()
  @IsInt()
  ID_USUARIO: number;

  @IsOptional()
  @IsInt()
  ID_TAXONOMY: number;

  @IsOptional()
  @IsString()
  SLUG_TAXONOMY: string;

  @IsOptional()
  @IsInt()
  ID_PRODUTO: number;

  @IsOptional()
  @IsString()
  PRODUTO: string;

  @IsInt()
  FLAG_ESTOQUE: number;

  @IsInt()
  QT_REGISTROS: number;
  @IsInt()
  PAGINA_ID: number;
  @IsInt()
  COLUNA_ID: number;
  @IsInt()
  ORDEM_ID: number;
}
