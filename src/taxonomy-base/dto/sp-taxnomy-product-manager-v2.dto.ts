import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class SpTaxnomyProductManagerV2Dto {
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

  @ApiProperty({ description: 'Search by product, reference, model or ID' })
  @IsString()
  @IsOptional()
  pe_search?: string;

  @ApiProperty({ description: 'Taxonomy ID; zero selects all taxonomies' })
  @IsNumber()
  @Min(0)
  pe_id_taxonomy!: number;

  @ApiProperty({
    description: 'Filter products without a family',
    enum: [0, 1],
  })
  @IsNumber()
  @IsIn([0, 1])
  pe_flag_no_family!: number;

  @ApiProperty({ description: 'Filter products without a group', enum: [0, 1] })
  @IsNumber()
  @IsIn([0, 1])
  pe_flag_no_group!: number;

  @ApiProperty({
    description: 'Filter products without a subgroup',
    enum: [0, 1],
  })
  @IsNumber()
  @IsIn([0, 1])
  pe_flag_no_subgroup!: number;

  @ApiProperty({ description: 'Records per page', maximum: 1000 })
  @IsNumber()
  @Min(1)
  @Max(1000)
  pe_qt_registros!: number;

  @ApiProperty({ description: 'Zero-based page index' })
  @IsNumber()
  @Min(0)
  pe_pagina_id!: number;

  @ApiProperty({ description: 'Sort column: 1=product, 2=ID', enum: [1, 2] })
  @IsNumber()
  @IsIn([1, 2])
  pe_coluna_id!: number;

  @ApiProperty({
    description: 'Sort direction: 1=ascending, 2=descending',
    enum: [1, 2],
  })
  @IsNumber()
  @IsIn([1, 2])
  pe_ordem_id!: number;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_search": "",
  "pe_id_taxonomy": 0,
  "pe_flag_no_family": 0,
  "pe_flag_no_group": 0,
  "pe_flag_no_subgroup": 0,
  "pe_qt_registros": 2,
  "pe_pagina_id": 0,
  "pe_coluna_id": 1,
  "pe_ordem_id": 1
}
*/
