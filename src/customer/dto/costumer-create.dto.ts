import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @ApiProperty({ description: 'User name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_nome_usuario: string;

  @ApiProperty({ description: 'Name', maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  pe_nome: string;

  @ApiProperty({ description: 'Login email', maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  pe_email_de_login: string;

  @ApiProperty({ description: 'Person type ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_id_pessoa_tipo: number;

  @ApiProperty({ description: 'CNPJ', maxLength: 100 })
  @IsString()
  pe_cnpj: string;

  @ApiProperty({ description: 'Company name', maxLength: 255 })
  @IsString()
  pe_razao_social: string;

  @ApiProperty({ description: 'CPF', maxLength: 100 })
  @IsString()
  pe_cpf: string;

  @ApiProperty({ description: 'Phone 1', maxLength: 100 })
  @IsString()
  pe_fone1: string;

  @ApiProperty({ description: 'WhatsApp 1', maxLength: 100 })
  @IsString()
  pe_whatsapp1: string;

  @ApiProperty({ description: 'Image 1', maxLength: 500 })
  @IsString()
  pe_imagem01: string;

  @ApiProperty({ description: 'ZIP code', maxLength: 100 })
  @IsString()
  pe_cep: string;

  @ApiProperty({ description: 'Address', maxLength: 300 })
  @IsString()
  pe_endereco: string;

  @ApiProperty({ description: 'Address number', maxLength: 100 })
  @IsString()
  pe_endereco_numero: string;

  @ApiProperty({ description: 'Complement', maxLength: 100 })
  @IsString()
  pe_complemento: string;

  @ApiProperty({ description: 'Neighborhood', maxLength: 300 })
  @IsString()
  pe_bairro: string;

  @ApiProperty({ description: 'City', maxLength: 300 })
  @IsString()
  pe_cidade: string;

  @ApiProperty({ description: 'State', maxLength: 100 })
  @IsString()
  pe_uf: string;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_anotacoes: string;
}
