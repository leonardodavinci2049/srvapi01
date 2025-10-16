import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class TaxonomyFindDto {
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

  @ApiProperty({ description: 'Parent ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_parent?: number;

  @ApiProperty({ description: 'Taxonomy ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_taxonomy?: number;

  @ApiProperty({ description: 'Taxonomy', maxLength: 300, required: false })
  @IsOptional()
  @IsString()
  pe_taxonomia?: string;

  @ApiProperty({ description: 'Inactive Flag', required: false })
  @IsOptional()
  @IsNumber()
  pe_flag_inativo?: number;

  @ApiProperty({ description: 'Records Quantity', required: false })
  @IsOptional()
  @IsNumber()
  pe_qt_registros?: number;

  @ApiProperty({ description: 'Page ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_pagina_id?: number;

  @ApiProperty({ description: 'Column ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_coluna_id?: number;

  @ApiProperty({ description: 'Order ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_ordem_id?: number;
}
