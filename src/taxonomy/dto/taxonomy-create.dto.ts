import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyCreateDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

  @ApiProperty({ description: 'Type ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_tipo?: number;

  @ApiProperty({ description: 'Parent ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_parent_id?: number;

  @ApiProperty({ description: 'Taxonomy', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  pe_taxonomia?: string;

  @ApiProperty({ description: 'Slug', maxLength: 300, required: false })
  @IsOptional()
  @IsString()
  pe_slug?: string;

  @ApiProperty({ description: 'Level', required: false })
  @IsOptional()
  @IsNumber()
  pe_level?: number;
}
