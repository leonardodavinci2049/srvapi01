import { IsInt, IsOptional, IsString } from 'class-validator';

export class FindProductIdDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsOptional()
  @IsInt()
  ID_USUARIO: number;

  @IsOptional()
  @IsInt()
  ID_PRODUTO: number;

  @IsOptional()
  @IsString()
  SLUG_PRODUTO: string;
}
