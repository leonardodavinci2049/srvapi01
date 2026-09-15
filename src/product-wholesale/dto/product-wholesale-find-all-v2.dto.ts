import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductWholesaleFindAllV2Dto extends EndpointContextDto {
  @ApiPropertyOptional({
    description: 'Search Term',
    maxLength: 300,
    example: 'perfume',
  })
  @IsOptional()
  @IsString()
  pe_search?: string;

  @ApiProperty({ description: 'Customer ID', example: 0 })
  @IsNumber()
  @Type(() => Number)
  pe_customer_id!: number;

  @ApiPropertyOptional({ description: 'Taxonomy ID', example: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_taxonomy_id?: number;

  @ApiPropertyOptional({ description: 'Brand ID', example: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_brand_id?: number;

  @ApiPropertyOptional({ description: 'Stock Flag', example: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_stock_flag?: number;

  @ApiPropertyOptional({
    description: 'Number of Records',
    example: 100,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_qt_records?: number;

  @ApiPropertyOptional({ description: 'Page ID', example: 0 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_page_id?: number;

  @ApiPropertyOptional({ description: 'Column ID', example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_column_id?: number;

  @ApiPropertyOptional({ description: 'Order ID', example: 2 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_order_id?: number;
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
  "pe_search": "perfume",
  "pe_customer_id": 0,
  "pe_taxonomy_id": 0,
  "pe_brand_id": 0,
  "pe_stock_flag": 0,
  "pe_qt_records": 100,
  "pe_page_id": 0,
  "pe_column_id": 1,
  "pe_order_id": 2
}
*/
