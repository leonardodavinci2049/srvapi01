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

export class CustomerGeneralUpdDto {
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
    maxLength: 300,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_nome?: string;

  @ApiProperty({ description: 'Telefone 1', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_fone1?: string;

  @ApiProperty({ description: 'WhatsApp 1', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_whatsapp1?: string;

  @ApiProperty({
    description: 'Email de login',
    maxLength: 100,
    required: false,
  })
  @IsEmail()
  @IsOptional()
  @MaxLength(100)
  pe_email_de_login?: string;

  @ApiProperty({
    description: 'Caminho da imagem',
    maxLength: 500,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_path_imagem?: string;
}
