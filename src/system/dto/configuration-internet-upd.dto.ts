import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationInternetUpdDto {
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

  @ApiProperty({ description: 'Company Internet 1', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet1?: string;

  @ApiProperty({ description: 'Company Internet 2', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet2?: string;

  @ApiProperty({ description: 'Company Internet 3', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet3?: string;

  @ApiProperty({ description: 'Company Internet 4', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet4?: string;

  @ApiProperty({ description: 'Company Internet 5', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet5?: string;
}
