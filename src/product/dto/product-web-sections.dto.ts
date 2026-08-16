import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductWebSectionsDto {
  @ApiProperty({ description: 'App ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_app_id?: number;

  @ApiProperty({ description: 'System Client ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_system_client_id?: number;

  @ApiProperty({ description: 'Store ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_store_id?: number;

  @ApiProperty({
    description: 'Organization ID',
    maxLength: 200,
    example: 'ORG001',
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_organization_id?: string;

  @ApiProperty({
    description: 'Member ID',
    maxLength: 200,
    example: 'MEM001',
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_member_id?: string;

  @ApiProperty({
    description: 'User ID',
    maxLength: 200,
    example: 'USER001',
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_user_id?: string;

  @ApiProperty({ description: 'Person ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_person_id?: number;

  @ApiProperty({ description: 'Taxonomy ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_id_taxonomy?: number;

  // PE_ID_MARCA INT,
  @ApiProperty({
    description: 'Brand ID',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_id_marca?: number;

  @ApiProperty({ description: 'Type ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_id_tipo?: number;

  @ApiProperty({ description: 'flag Promotions', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_promotions?: number;

  @ApiProperty({ description: 'flag Highlight', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_highlight?: number;

  @ApiProperty({ description: 'flag Launch', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_lancamento?: number;

  @ApiProperty({
    description: 'Number of Records',
    example: 10,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_qt_registros?: number;

  @ApiProperty({ description: 'Page ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_pagina_id?: number;

  @ApiProperty({ description: 'Column ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_coluna_id?: number;

  @ApiProperty({ description: 'Order ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_ordem_id?: number;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_member_id": "MEM001",
  "pe_user_id": "USER001",
  "pe_person_id": 1,
  "pe_id_taxonomy": 1,
  "pe_id_marca": 1,
  "pe_id_tipo": 1,
  "pe_flag_promotions": 1,
  "pe_flag_highlight": 1,
  "pe_flag_lancamento": 1,
  "pe_qt_registros": 10,
  "pe_pagina_id": 1,
  "pe_coluna_id": 1,
  "pe_ordem_id": 1
}
*/
