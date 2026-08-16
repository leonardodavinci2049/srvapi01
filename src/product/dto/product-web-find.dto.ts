import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductWebFindDto extends EndpointContextDto {
  @ApiProperty({
    description: 'Member ID',
    maxLength: 200,
    example: 'MEM001',
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_member_id?: string;

  @ApiProperty({ description: 'Taxonomy ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_id_taxonomy?: number;

  @ApiProperty({
    description: 'slug Taxonomy',
    maxLength: 300,
    example: 'categoria-exemplo',
    required: false,
  })
  @IsString()
  pe_slug_taxonomy?: string;

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

  @ApiProperty({ description: 'BRAND ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_id_marca?: number;

  @ApiProperty({ description: 'Stock Flag', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_estoque?: number;

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
  "pe_slug_taxonomy": "categoria-exemplo",
  "pe_id_produto": 1,
  "pe_produto": "Produto Exemplo",
  "pe_id_marca": 1,
  "pe_flag_estoque": 1,
  "pe_qt_registros": 10,
  "pe_pagina_id": 1,
  "pe_coluna_id": 1,
  "pe_ordem_id": 1
}
*/
