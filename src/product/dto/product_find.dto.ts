import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductFindDto {
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

  @ApiProperty({ description: 'Product ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_id_produto?: number;

  @ApiProperty({
    description: 'Product Name',
    maxLength: 300,
    example: 'Produto Exemplo',
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_produto?: string;

  @ApiProperty({ description: 'Stock Flag', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_estoque?: number;

  @ApiProperty({ description: 'Inactive Flag', example: 0, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_inativo?: number;

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
