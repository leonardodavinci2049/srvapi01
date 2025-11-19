import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  MaxLength,
  IsEmail,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationGeneralUpdDto {
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

  @ApiProperty({ description: 'Configuration ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_id_configuration?: number;

  @ApiProperty({ description: 'Company Name', maxLength: 200 })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  pe_company_name?: string;

  @ApiProperty({ description: 'Company Title', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_company_title?: string;

  @ApiProperty({ description: 'Company CNPJ', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_company_cnpj?: string;

  @ApiProperty({ description: 'Company Phone', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_company_phone?: string;

  @ApiProperty({ description: 'Company WhatsApp', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_company_whatsapp?: string;

  @ApiProperty({ description: 'Company Email', maxLength: 100 })
  @IsEmail()
  @IsOptional()
  @MaxLength(100)
  pe_company_email?: string;
}
