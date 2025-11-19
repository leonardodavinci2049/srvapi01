import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
export class ConfigurationCreateDto {
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

  @ApiProperty({ description: 'Company Name', maxLength: 200 })
  @IsString()
  @IsOptional()
  pe_company_name?: string;

  @ApiProperty({ description: 'Company Title', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_company_title?: string;

  @ApiProperty({ description: 'Company CNPJ', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_company_cnpj?: string;

  @ApiProperty({ description: 'Company Phone', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_company_phone?: string;

  @ApiProperty({ description: 'Company WhatsApp', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_company_whatsapp?: string;

  @ApiProperty({ description: 'Company Email', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_company_email?: string;

  @ApiProperty({ description: 'Developer Logo Dark', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_developer_logo_dark?: string;

  @ApiProperty({ description: 'Developer Logo White', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_developer_logo_white?: string;

  @ApiProperty({ description: 'Developer Name', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_developer_name?: string;

  @ApiProperty({ description: 'Developer URL', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_developer_url?: string;
}
