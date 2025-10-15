import { IsInt } from 'class-validator';

export class UpdAccountTypeDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  ID_PESSOA_TIPO: number;
}
