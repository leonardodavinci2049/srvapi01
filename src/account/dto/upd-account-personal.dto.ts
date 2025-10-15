import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdAccountPersonalDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsString({ message: 'CPF must be a valid string', each: true })
  CPF: string;

  @IsOptional()
  @IsString({ message: 'PRIMEIRO_NOME must be a valid string', each: true })
  PRIMEIRO_NOME: string;

  @IsOptional()
  @IsString({ message: 'SOBRENOME must be a valid string', each: true })
  SOBRENOME: string;

  @IsOptional()
  @IsString({ message: 'PATH_IMAGEM must be a valid string', each: true })
  PATH_IMAGEM: string;

  @IsOptional()
  @IsString({ message: 'DATADONASCIMENTO must be a valid string', each: true })
  DATADONASCIMENTO: string;
}
