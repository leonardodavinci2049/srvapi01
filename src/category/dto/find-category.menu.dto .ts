import { IsInt, IsOptional } from 'class-validator';

export class FindCategoryMenuDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsOptional()
  @IsInt()
  ID_LOJA: number;

  @IsOptional()
  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  ID_TIPO: number;
}
