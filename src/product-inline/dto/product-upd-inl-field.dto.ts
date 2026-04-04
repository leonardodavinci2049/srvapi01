import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductUpdInlFieldDto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id!: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id!: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id!: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id!: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_id!: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name!: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role!: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id!: number;

  @ApiProperty({ description: 'Register ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_register_id!: number;

  @ApiProperty({ description: 'Field Type' })
  @IsNumber()
  @IsNotEmpty()
  pe_field_type!: number;

  @ApiProperty({ description: 'Field', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_field!: string;

  @ApiPropertyOptional({ description: 'Value String' })
  @IsString()
  @IsOptional()
  pe_value_str?: string;

  @ApiPropertyOptional({ description: 'Value Integer' })
  @IsNumber()
  @IsOptional()
  pe_value_int?: number;

  @ApiPropertyOptional({ description: 'Value Numeric (Decimal 18,6)' })
  @IsNumber()
  @IsOptional()
  pe_value_numeric?: number;

  @ApiPropertyOptional({ description: 'Value Date (YYYY-MM-DD)' })
  @IsString()
  @IsOptional()
  pe_value_date?: string;
}
