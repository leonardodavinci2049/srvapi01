import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

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

  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Customer ID', required: false })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  pe_customer_id?: number;

  @ApiProperty({
    description: 'Nome completo',
    maxLength: 200,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  pe_nome?: string;

  @ApiProperty({ description: 'CPF', maxLength: 200, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  pe_cpf?: string;

  @ApiProperty({ description: 'CNPJ', maxLength: 200, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  pe_cnpj?: string;

  @ApiProperty({ description: 'Telefone 1', maxLength: 200, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  pe_fone1?: string;

  @ApiProperty({
    description: 'Email de login',
    maxLength: 200,
    required: false,
  })
  @IsEmail()
  @IsOptional()
  @MaxLength(200)
  pe_email_de_login?: string;

  @ApiProperty({
    description: 'Quantidade de registros por página',
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  pe_qt_registros?: number;

  @ApiProperty({ description: 'Número da página', required: false })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  pe_pagina_id?: number;

  @ApiProperty({ description: 'ID da coluna para ordenação', required: false })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  pe_coluna_id?: number;

  @ApiProperty({ description: 'ID da ordem (ASC/DESC)', required: false })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  pe_ordem_id?: number;
}
