import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CustomerPdvFindAllV2Dto extends EndpointContextDto {
  @ApiProperty({
    description: 'Customer ID (reserved and unused by this procedure)',
    example: 1937,
  })
  @IsInt()
  pe_customer_id!: number;

  @ApiProperty({
    description: 'Seller ID (reserved and unused by this procedure)',
    example: 0,
  })
  @IsInt()
  pe_seller_id!: number;

  @ApiProperty({ description: 'Search term', example: '47723', maxLength: 300 })
  @IsString()
  @MaxLength(300)
  pe_search!: string;

  @ApiProperty({ description: 'Category ID (0 = all)', example: 0 })
  @IsInt()
  pe_category_id!: number;

  @ApiProperty({ description: 'Client type ID (0 = all)', example: 0 })
  @IsInt()
  pe_client_type!: number;

  @ApiProperty({ description: 'Person type ID (0 = all)', example: 0 })
  @IsInt()
  pe_person_type!: number;

  @ApiProperty({
    description: 'Image filter (0 = all; 1 = without image)',
    example: 0,
  })
  @IsInt()
  pe_flag_no_image!: number;

  @ApiProperty({
    description: 'Approval filter (0 = all; 1 = not approved; 2 = approved)',
    example: 0,
  })
  @IsInt()
  pe_flag_approved!: number;

  @ApiProperty({
    description: 'Gender filter (0 = all; 1 = male; 2 = female)',
    example: 0,
  })
  @IsInt()
  pe_gender_type!: number;

  @ApiProperty({
    description:
      'Restriction filter (0 = all; 1 = unrestricted; 2 = restricted)',
    example: 0,
  })
  @IsInt()
  pe_flag_restricted!: number;

  @ApiProperty({
    description: 'Activity filter (0 = all; 1 = inactive; 2 = active)',
    example: 0,
  })
  @IsInt()
  pe_flag_enabled!: number;

  @ApiProperty({ description: 'Customer status ID (0 = all)', example: 0 })
  @IsInt()
  pe_status_id!: number;

  @ApiProperty({
    description:
      'Operation filter (0 = all; 1 = no purchase; 2 = 3 months; 3 = 6 months; 6 = 1 year; 7 = registration period)',
    example: 0,
  })
  @IsInt()
  pe_flag_operation_list!: number;

  @ApiPropertyOptional({
    description: 'Start date (YYYY-MM-DD; required for operation filter 7)',
    example: null,
    nullable: true,
    maxLength: 300,
  })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  pe_start_date?: string | null;

  @ApiPropertyOptional({
    description:
      'End date (YYYY-MM-DD; inclusive; required for operation filter 7)',
    example: null,
    nullable: true,
    maxLength: 300,
  })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  pe_end_date?: string | null;

  @ApiProperty({
    description: 'Records per page (less than 1 = 100; capped at 1000)',
    example: 100,
  })
  @IsInt()
  pe_qt_records!: number;

  @ApiProperty({ description: 'Page index (0 = first page)', example: 0 })
  @IsInt()
  pe_page_id!: number;

  @ApiProperty({
    description: 'Sort column (1 = name; 2 = ID; 3 = last purchase)',
    example: 1,
  })
  @IsInt()
  pe_column_id!: number;

  @ApiProperty({
    description: 'Sort direction (1 = ascending; 2 = descending)',
    example: 1,
  })
  @IsInt()
  pe_order_id!: number;
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
  "pe_customer_id": 1937,
  "pe_seller_id": 0,
  "pe_search": "47723",
  "pe_category_id": 0,
  "pe_client_type": 0,
  "pe_person_type": 0,
  "pe_flag_no_image": 0,
  "pe_flag_approved": 0,
  "pe_gender_type": 0,
  "pe_flag_restricted": 0,
  "pe_flag_enabled": 0,
  "pe_status_id": 0,
  "pe_flag_operation_list": 0,
  "pe_start_date": null,
  "pe_end_date": null,
  "pe_qt_records": 100,
  "pe_page_id": 0,
  "pe_column_id": 1,
  "pe_order_id": 1
}
*/
