import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyFindDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

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
