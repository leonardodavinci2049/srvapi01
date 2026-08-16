import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductFindDto extends EndpointContextDto {
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
