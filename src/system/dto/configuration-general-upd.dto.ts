import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ConfigurationGeneralUpdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

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
