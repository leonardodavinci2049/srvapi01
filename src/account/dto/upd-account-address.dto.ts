import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdAccountAddressDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsString({ message: 'CEP must be a valid string', each: true })
  CEP: string;

  @IsOptional()
  @IsString({ message: 'ENDERECO must be a valid string', each: true })
  ENDERECO: string;

  @IsOptional()
  @IsString({ message: 'ENDERECO_NUMERO must be a valid string', each: true })
  ENDERECO_NUMERO: string;

  @IsOptional()
  @IsString({ message: 'COMPLEMENTO must be a valid string', each: true })
  COMPLEMENTO: string;

  @IsOptional()
  @IsString({ message: 'BAIRRO must be a valid string', each: true })
  BAIRRO: string;

  @IsOptional()
  @IsString({ message: 'CIDADE must be a valid string', each: true })
  CIDADE: string;
  @IsOptional()
  @IsString({ message: 'UF must be a valid string', each: true })
  UF: string;

  @IsOptional()
  @IsString({ message: 'COD_MUNICIPIO must be a valid string', each: true })
  COD_MUNICIPIO: string;

  @IsOptional()
  @IsString({ message: 'COD_UF must be a valid string', each: true })
  COD_UF: string;
}
