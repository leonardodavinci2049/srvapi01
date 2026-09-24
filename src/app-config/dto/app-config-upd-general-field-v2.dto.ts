import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export const APP_CONFIG_UPDATABLE_FIELDS = [
  'APP_NAME',
  'CLIENT_NAME',
  'DOMINIO',
  'PATH_IMAGEM',

  'GENERAL_CONFIG_JSON',
  'COMPANY_INFO_JSON',
  'COMPANY_ABOUT_JSON',
  'COMPANY_ADDRESS_JSON',
  'COMPANY_SEO_JSON',
  'COMPANY_FAQ_JSON',
  'COMPANY_LINKS_JSON',

  'PAYMENT_METHOD_JSON',
  
  'HOME_INFO_JSON',
  'HOME_BRAND_JSON',
  'HOME_CATEGORY_JSON',
  'HOME_SECTION_JSON',
  'HOME_MENU_JSON',
  'HOME_HERO_JSON',

  'FLAG_MAINTENANCE',
  'IS_ACTIVE',
  'NOTES',
] as const;

export type AppConfigUpdatableField =
  (typeof APP_CONFIG_UPDATABLE_FIELDS)[number];

export class AppConfigUpdGeneralFieldV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'App configuration register ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_register_id!: number;

  @ApiProperty({
    description: 'Field type: 1=string, 2=bigint, 3=decimal, 4=date',
    enum: [1, 2, 3, 4],
  })
  @IsIn([1, 2, 3, 4])
  pe_field_type!: number;

  @ApiProperty({
    description: 'Allowed column name from tbl_app_config',
    enum: APP_CONFIG_UPDATABLE_FIELDS,
  })
  @IsIn(APP_CONFIG_UPDATABLE_FIELDS)
  pe_field!: AppConfigUpdatableField;

  @ApiPropertyOptional({ description: 'Value for pe_field_type = 1' })
  @IsString()
  @IsOptional()
  pe_value_str?: string | null;

  @ApiPropertyOptional({ description: 'Value for pe_field_type = 2' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_value_int?: number | null;

  @ApiPropertyOptional({ description: 'Value for pe_field_type = 3' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_value_numeric?: number | null;

  @ApiPropertyOptional({
    description: 'Value for pe_field_type = 4 (YYYY-MM-DD)',
  })
  @IsDateString({ strict: true })
  @IsOptional()
  pe_value_date?: string | null;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 4,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG-TEST",
  "pe_user_id": "USER-TEST",
  "pe_user_name": "API Test",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_register_id": 1,
  "pe_field_type": 1,
  "pe_field": "APP_NAME",
  "pe_value_str": "Example Application",
  "pe_value_int": null,
  "pe_value_numeric": null,
  "pe_value_date": null
}

*/
