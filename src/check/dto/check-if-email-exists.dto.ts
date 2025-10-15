import { IsInt, IsString } from 'class-validator';

export class CheckIfEmailExistsDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsString({ message: 'TERMO must be a valid string', each: true })
  TERMO: string;
}
