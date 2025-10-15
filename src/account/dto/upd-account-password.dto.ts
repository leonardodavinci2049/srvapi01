import { IsInt, IsString } from 'class-validator';

export class UpdAccountPasswordDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsString({ message: 'SENHA must be a valid string', each: true })
  SENHA: string;
}
