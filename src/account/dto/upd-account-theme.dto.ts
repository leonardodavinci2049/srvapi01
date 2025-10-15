import { IsInt } from 'class-validator';

export class UpdAccountThemeDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  ID_THEMA: number;
}
