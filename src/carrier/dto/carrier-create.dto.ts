import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CarrierCreateDto {
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

  @ApiProperty({ description: 'Person Type ID' })
  @IsNumber()
  @IsOptional()
  pe_id_pessoa_tipo?: number;

  @ApiProperty({ description: 'Name', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_nome?: string;

  @ApiProperty({ description: 'Phone 1', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_fone1?: string;

  @ApiProperty({ description: 'WhatsApp 1', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_whatapp1?: string;

  @ApiProperty({ description: 'Email 1', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_email1?: string;

  @ApiProperty({ description: 'Website', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_website?: string;

  @ApiProperty({ description: 'CNPJ', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_cnpj?: string;

  @ApiProperty({ description: 'Company Name', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_razao_social?: string;

  @ApiProperty({ description: 'Responsible Name', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_nome_responsavel?: string;

  @ApiProperty({ description: 'CPF', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_cpf?: string;

  @ApiProperty({ description: 'Image Path', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_path_imagem?: string;
}
