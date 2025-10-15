import { IsInt, IsOptional, IsString } from 'class-validator';

export class FindCategoryDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsOptional()
  @IsInt()
  ID_USUARIO: number;

  @IsOptional()
  @IsInt()
  ID_TIPO: number;

  @IsOptional()
  @IsInt()
  ID_TAXONOMIA: number;

  @IsOptional()
  @IsString()
  TAXONOMIA: string;

  @IsInt()
  QT_REGISTROS: number;
  @IsInt()
  PAGINA_ID: number;
  @IsInt()
  COLUNA_ID: number;
  @IsInt()
  ORDEM_ID: number;
}
