import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CostumerFindDto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Member Role', maxLength: 200 })
  @IsString()
  pe_member_role: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_person_id: number;

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_customer_id: number;

  @ApiProperty({ description: 'NOME', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_nome: string;

  @ApiProperty({ description: 'CPF', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_cpf: string;

  @ApiProperty({ description: 'CNPJ', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_cnpj: string;

  @ApiProperty({ description: 'FONE1', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_fone1: string;

  @ApiProperty({ description: 'EMAIL_DE_LOGIN', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_email_de_login: string;

  @ApiProperty({ description: 'QT_REGISTROS' })
  @IsNumber()
  @IsNotEmpty()
  pe_qt_registros: number;

  @ApiProperty({ description: 'PAGINA_ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_pagina_id: number;

  @ApiProperty({ description: 'COLUNA_ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_coluna_id: number;

  @ApiProperty({ description: 'ORDEM_ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_ordem_id: number;
}
