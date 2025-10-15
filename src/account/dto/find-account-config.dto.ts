import { IsInt } from 'class-validator';

export class FindAccountConfigDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;
}
