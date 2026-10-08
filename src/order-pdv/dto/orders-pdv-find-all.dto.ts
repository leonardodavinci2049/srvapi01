import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrdersPdvFindAllDto extends EndpointContextDto {
  @ApiPropertyOptional({
    description: 'Customer ID (null/0 = all)',
    example: 0,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_customer_id?: number | null;

  @ApiPropertyOptional({
    description: 'Seller ID (null/0 = all)',
    example: 5,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_seller_id?: number | null;

  @ApiPropertyOptional({
    description: 'Search term',
    example: 'paulo',
    nullable: true,
    maxLength: 300,
  })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  pe_search?: string | null;

  @ApiPropertyOptional({
    description: 'Order status ID (null/0 = all)',
    example: 0,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_order_status_id?: number | null;

  @ApiPropertyOptional({
    description: 'Financial status ID (null/0 = all)',
    example: 0,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_financial_status_id?: number | null;

  @ApiPropertyOptional({
    description: 'Delivery status ID (reserved and unused by this procedure)',
    example: 0,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_delivery_status_id?: number | null;

  @ApiPropertyOptional({
    description: 'Location ID (null/0 = all)',
    example: 0,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_location_id?: number | null;

  @ApiPropertyOptional({
    description:
      'Date column (1 = order date; 2 = delivery date; others = registration date)',
    example: 0,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_flag_operation_date?: number | null;

  @ApiProperty({
    description: 'Period start date (YYYY-MM-DD)',
    example: '2026-06-05',
  })
  @IsDateString({ strict: true })
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  pe_start_date!: string;

  @ApiProperty({
    description: 'Period end (inclusive) date (YYYY-MM-DD)',
    example: '2026-06-05',
  })
  @IsDateString({ strict: true })
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  pe_end_date!: string;

  @ApiPropertyOptional({
    description: 'Records per page (null/less than 1 = 100; capped at 1000)',
    example: 20,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_records_per_page?: number | null;

  @ApiPropertyOptional({
    description: 'Page index (null/less than 0 = 0; 0 = first page)',
    example: 0,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_page_id?: number | null;

  @ApiPropertyOptional({
    description: 'Sort column (1 = product; 2 = ID; 3 = total)',
    example: 2,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_sort_column_id?: number | null;

  @ApiPropertyOptional({
    description: 'Sort direction (1 = ascending; 2 = descending)',
    example: 2,
    nullable: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
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
  "pe_user_name": "Test User",
  "pe_user_role": "admin",
  "pe_person_id": 1937,
  "pe_customer_id": 0,
  "pe_seller_id": 5,
  "pe_search": "paulo",
  "pe_order_status_id": 0,
  "pe_financial_status_id": 0,
  "pe_delivery_status_id": 0,
  "pe_location_id": 0,
  "pe_flag_operation_date": 0,
  "pe_start_date": "2026-06-05",
  "pe_end_date": "2026-06-05",
  "pe_records_per_page": 20,
  "pe_page_id": 0,
  "pe_sort_column_id": 2,
  "pe_sort_order_id": 2
}
*/
