import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  IsEmail,
} from 'class-validator';

export class CostumerCreateDto {
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

  @ApiProperty({ description: 'Nome completo', maxLength: 255 })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  pe_nome?: string;

  @ApiProperty({ description: 'Email de login', maxLength: 255 })
  @IsEmail()
  @IsOptional()
  @MaxLength(255)
  pe_email_de_login?: string;

  @ApiProperty({ description: 'ID do tipo de pessoa' })
  @IsNumber()
  @IsOptional()
  pe_id_pessoa_tipo?: number;

  @ApiProperty({ description: 'CNPJ', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_cnpj?: string;

  @ApiProperty({ description: 'Razão social', maxLength: 255 })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  pe_razao_social?: string;

  @ApiProperty({ description: 'CPF', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_cpf?: string;

  @ApiProperty({ description: 'Telefone 1', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_fone1?: string;

  @ApiProperty({ description: 'WhatsApp 1', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_whatsapp1?: string;

  @ApiProperty({ description: 'URL da imagem 1', maxLength: 500 })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_imagem01?: string;

  @ApiProperty({ description: 'CEP', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_cep?: string;

  @ApiProperty({ description: 'Endereço', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_endereco?: string;

  @ApiProperty({ description: 'Número do endereço', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_endereco_numero?: string;

  @ApiProperty({ description: 'Complemento', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_complemento?: string;

  @ApiProperty({ description: 'Bairro', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_bairro?: string;

  @ApiProperty({ description: 'Cidade', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_cidade?: string;

  @ApiProperty({ description: 'UF', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_uf?: string;

  @ApiProperty({ description: 'Anotações' })
  @IsString()
  @IsOptional()
  pe_anotacoes?: string;
}
