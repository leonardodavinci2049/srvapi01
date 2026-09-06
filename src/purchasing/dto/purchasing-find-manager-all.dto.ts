import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class PurchasingFindManagerAllDto extends EndpointContextDto {
  @ApiPropertyOptional({
    description:
      'Search term (null/empty returns all; text matches product/ref/model; number matches ID/product/ref/model)',
    maxLength: 300,
  })
  @IsString()
  @IsOptional()
  pe_search?: string | null;

  @ApiPropertyOptional({
    description: 'Taxonomy ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_taxonomy_id?: number | null;

  @ApiPropertyOptional({
    description: 'Product type ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_type_id?: number | null;

  @ApiPropertyOptional({
    description: 'Brand ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_brand_id?: number | null;

  @ApiPropertyOptional({
    description: 'Supplier ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_supplier_id?: number | null;

  @ApiPropertyOptional({
    description:
      'Sales list: 0=all; 1=best sellers; 2=lowest selling; 3=stalled',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_flag_sales_list?: number | null;

  @ApiPropertyOptional({
    description:
      'Stock list: 0=all; 1=in stock; 2=stock up to 2; 3=latest registrations',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_flag_stock_list?: number | null;

  @ApiPropertyOptional({
    description: 'Advanced filter: 0=all; 1=wholesale price below 1; 2=service',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_flag_advanced?: number | null;

  @ApiPropertyOptional({
    description: 'Imported flag: 0=all; 1=imported; 2=national',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_flag_imported?: number | null;

  @ApiPropertyOptional({
    description: 'Premium flag: 0=all; 1=premium',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_flag_premium?: number | null;

  @ApiPropertyOptional({
    description:
      'Criticality level: null/0=all; 1=critical; 2=high; 3=medium; 4=low',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_criticality_level?: number | null;

  @ApiPropertyOptional({
    description: 'Various lists: 0=all; reserved for future special lists',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_flag_various_lists?: number | null;

  @ApiPropertyOptional({
    description: 'Records per page (null/<1=100; max 1000)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_qt_records?: number | null;

  @ApiPropertyOptional({
    description: 'Page index (null/<0=0; 0=first page)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_page_id?: number | null;

  @ApiPropertyOptional({
    description: 'Order column: 1=product; 2=ID; 3=wholesale price',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_column_id?: number | null;

  @ApiPropertyOptional({
    description: 'Order direction: 1=ascending; 2=descending',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_order_id?: number | null;
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
  "pe_user_role": "purchasing_manager",
  "pe_person_id": 29014,
  "pe_search": "",
  "pe_taxonomy_id": 0,
  "pe_type_id": 0,
  "pe_brand_id": 0,
  "pe_supplier_id": 0,
  "pe_flag_sales_list": 0,
  "pe_flag_stock_list": 0,
  "pe_flag_advanced": 0,
  "pe_flag_imported": 0,
  "pe_flag_premium": 0,
  "pe_criticality_level": 0,
  "pe_flag_various_lists": 0,
  "pe_qt_records": 20,
  "pe_page_id": 0,
  "pe_column_id": 2,
  "pe_order_id": 2
}
*/
