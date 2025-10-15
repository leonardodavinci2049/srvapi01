import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdAccountBusinessDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsString({ message: 'CNPJ must be a valid string', each: true })
  CNPJ: string;

  @IsString({ message: 'RAZAO_SOCIAL must be a valid string', each: true })
  RAZAO_SOCIAL: string;

  @IsOptional()
  @IsString({ message: 'INSC_ESTADUAL must be a valid string', each: true })
  INSC_ESTADUAL: string;

  @IsOptional()
  @IsString({ message: 'INSC_MUNICIPAL must be a valid string', each: true })
  INSC_MUNICIPAL: string;

  @IsOptional()
  @IsString({ message: 'NOME_RESPONSAVEL must be a valid string', each: true })
  NOME_RESPONSAVEL: string;

  @IsOptional()
  @IsString({
    message: 'ATIVIDADE_PRINCIPAL must be a valid string',
    each: true,
  })
  ATIVIDADE_PRINCIPAL: string;
}
