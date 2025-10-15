import { IsInt, IsOptional, IsString } from 'class-validator';

export class FindCategoryIdDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsOptional()
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
}
