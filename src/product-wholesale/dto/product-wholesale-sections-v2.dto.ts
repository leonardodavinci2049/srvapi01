import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductWholesaleSectionsV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID', example: 0 })
  @IsNumber()
  @Type(() => Number)
  pe_customer_id!: number;

  @ApiPropertyOptional({ description: 'Taxonomy ID', example: 2629 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_taxonomy_id?: number;

  @ApiPropertyOptional({ description: 'Brand ID', example: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_brand_id?: number;

  @ApiPropertyOptional({ description: 'Type ID', example: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_type_id?: number;

  @ApiPropertyOptional({ description: 'Promotion Flag', example: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_promotion_flag?: number;

  @ApiPropertyOptional({ description: 'Highlight Flag', example: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_highlight_flag?: number;

  @ApiPropertyOptional({ description: 'Launch Flag', example: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_launch_flag?: number;

  @ApiPropertyOptional({ description: 'Limit', example: 20 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_limit?: number;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_customer_id": 0,
  "pe_taxonomy_id": 2629,
  "pe_brand_id": 0,
  "pe_type_id": 0,
  "pe_promotion_flag": 0,
  "pe_highlight_flag": 0,
  "pe_launch_flag": 0,
  "pe_limit": 20
}
*/
