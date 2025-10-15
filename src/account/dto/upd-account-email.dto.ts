import { IsInt, IsString } from 'class-validator';

export class UpdAccountEmailDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsString({ message: 'EMAIL must be a valid string', each: true })
  EMAIL_DE_LOGIN: string;
}
