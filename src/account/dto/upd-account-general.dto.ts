import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdAccountGeneralDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsOptional()
  @IsString({ message: 'NOME must be a valid string', each: true })
  NOME: string;

  @IsOptional()
  @IsString({ message: 'FONE must be a valid string', each: true })
  FONE1: string;

  @IsOptional()
  @IsString({ message: 'WHATAPP1 must be a valid string', each: true })
  WHATSAPP1: string;

  @IsOptional()
  @IsString({ message: 'EMAIL must be a valid string', each: true })
  EMAIL_DE_LOGIN: string;

  @IsOptional()
  @IsString({ message: 'IMAGEM must be a valid string', each: true })
  PATH_IMAGEM: string;
}
