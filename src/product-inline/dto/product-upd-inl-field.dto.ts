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


/*
# Sample JSON for testing in body endpoint:

## pe_field_type: 1

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "saller",
  "pe_person_id": 48814,
  "pe_register_id": 57712,
  "pe_field_type": 1,
  "pe_field": "PRODUTO",
  "pe_value_str": "Novo Produto 19372846",
  "pe_value_int": 0,
  "pe_value_numeric": 0,
  "pe_value_date":  null

}

## pe_field_type: 2

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "saller",
  "pe_person_id": 48814,
  "pe_register_id": 57712,
  "pe_field_type": 2,
  "pe_field": "ID_MARCA",
  "pe_value_str": "",
  "pe_value_int": 3333,
  "pe_value_numeric": 0,
  "pe_value_date":  null

}

## pe_field_type: 3

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "saller",
  "pe_person_id": 48814,
  "pe_register_id": 57712,
  "pe_field_type": 3,
  "pe_field": "TX_LUCRO_VAREJO",
  "pe_value_str": "",
  "pe_value_int": 0,
  "pe_value_numeric": 33.55,
  "pe_value_date":  null

}

## pe_field_type: 4

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "saller",
  "pe_person_id": 48814,
  "pe_register_id": 57712,
  "pe_field_type": 4,
  "pe_field": "DT_UPD_WEBSITE",
  "pe_value_str": "",
  "pe_value_int": 0,
  "pe_value_numeric": 0,
  "pe_value_date":  "1990-01-01"

}



*/
