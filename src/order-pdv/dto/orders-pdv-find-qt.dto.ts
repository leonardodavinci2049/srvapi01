import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, Matches } from 'class-validator';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrdersPdvFindQtDto extends EndpointContextDto {
  @ApiPropertyOptional({
    description: 'Customer ID (null or less than 1 = all)',
    nullable: true,
    example: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_customer_id?: number | null;

  @ApiPropertyOptional({
    description: 'Seller ID (null or less than 1 = all)',
    nullable: true,
    example: 14264,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_seller_id?: number | null;

  @ApiPropertyOptional({
    description: 'Order status ID (null or less than 1 = all)',
    nullable: true,
    example: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_order_status_id?: number | null;

  @ApiPropertyOptional({
    description: 'Financial status ID (null or less than 1 = all)',
    nullable: true,
    example: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_financial_status_id?: number | null;

  @ApiPropertyOptional({
    description: 'Delivery status ID (null or less than 1 = all)',
    nullable: true,
    example: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_delivery_status_id?: number | null;

  @ApiPropertyOptional({
    description: 'Location ID (null or less than 1 = all)',
    nullable: true,
    example: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  pe_location_id?: number | null;

  @ApiProperty({
    description: 'Registration period start date (YYYY-MM-DD)',
    example: '2026-10-05',
  })
  @IsDateString({ strict: true })
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  pe_start_date!: string;

  @ApiProperty({
    description: 'Registration period end date, inclusive (YYYY-MM-DD)',
    example: '2026-11-02',
  })
  @IsDateString({ strict: true })
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  pe_end_date!: string;
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
  "pe_seller_id": 14264,
  "pe_order_status_id": 0,
  "pe_financial_status_id": 0,
  "pe_delivery_status_id": 0,
  "pe_location_id": 0,
  "pe_start_date": "2026-10-05",
  "pe_end_date": "2026-11-02"
}
*/
