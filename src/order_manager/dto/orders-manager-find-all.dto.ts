import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrdersManagerFindAllDto extends EndpointContextDto {
  @ApiPropertyOptional({
    description: 'Customer ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_customer_id?: number | null;

  @ApiPropertyOptional({
    description: 'Seller ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_seller_id?: number | null;

  @ApiPropertyOptional({
    description:
      'Free-text search: matches order ID (when numeric), customer name or seller name (null/empty returns all)',
    maxLength: 300,
  })
  @IsString()
  @IsOptional()
  pe_search?: string | null;

  @ApiPropertyOptional({
    description: 'Order status ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_order_status_id?: number | null;

  @ApiPropertyOptional({
    description: 'Financial status ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_financial_status_id?: number | null;

  @ApiPropertyOptional({
    description:
      'Delivery status ID (reserved parameter; not used by the procedure body)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_delivery_status_id?: number | null;

  @ApiPropertyOptional({
    description: 'Location ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_location_id?: number | null;

  @ApiPropertyOptional({
    description:
      'Operation date filter column: 0/others=order registration date DATADOCADASTRO (default); 1=order date DATA_PEDIDO; 2=delivery date DATA_ENTREGA',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_flag_operation_date?: number | null;

  @ApiProperty({
    description:
      'Period start date (filter column defined by pe_flag_operation_date; format YYYY-MM-DD)',
    maxLength: 300,
  })
  @IsString()
  pe_start_date!: string;

  @ApiProperty({
    description:
      'Period end date, inclusive (filter column defined by pe_flag_operation_date; format YYYY-MM-DD)',
    maxLength: 300,
  })
  @IsString()
  pe_end_date!: string;

  @ApiPropertyOptional({
    description: 'Records per page (null/<1=100; maximum=1000)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_records_per_page?: number | null;

  @ApiPropertyOptional({
    description: 'Page index (null/<0=0; 0=first page)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_page_id?: number | null;

  @ApiPropertyOptional({
    description: 'Sort column: 1=order product; 2=ID; 3=order total',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_sort_column_id?: number | null;

  @ApiPropertyOptional({
    description: 'Sort direction: 1=ascending; 2=descending',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_sort_order_id?: number | null;
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
  "pe_user_role": "orders_manager",
  "pe_person_id": 1937,
  "pe_customer_id": 0,
  "pe_seller_id": 0,
  "pe_search": "Hpsite",
  "pe_order_status_id": 0,
  "pe_financial_status_id": 0,
  "pe_delivery_status_id": 0,
  "pe_location_id": 0,
  "pe_flag_operation_date": 0,
  "pe_start_date": "2026-06-01",
  "pe_end_date": "2026-09-01",
  "pe_records_per_page": 2,
  "pe_page_id": 0,
  "pe_sort_column_id": 1,
  "pe_sort_order_id": 2
}
*/
