import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class SellerFindManagerAllV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Search term', maxLength: 300 })
  @IsString()
  pe_search!: string;

  @ApiProperty({
    description: 'Category ID (0 = all, >0 = filter by category)',
  })
  @IsNumber()
  pe_category_id!: number;

  @ApiProperty({
    description: 'Flag no image (0 = all, 1 = without image)',
  })
  @IsNumber()
  pe_flag_no_image!: number;

  @ApiProperty({
    description: 'Status ID (0 = all, 1 = inactive, 2 = active)',
  })
  @IsNumber()
  pe_status_id!: number;

  @ApiProperty({
    description: 'Record quantity (default: 100, maximum: 1000)',
  })
  @IsNumber()
  pe_qt_records!: number;

  @ApiProperty({ description: 'Page ID (0 = first page)' })
  @IsNumber()
  pe_page_id!: number;

  @ApiProperty({
    description: 'Column ID (1 = name, 2 = ID, 3 = last purchase)',
  })
  @IsNumber()
  pe_column_id!: number;

  @ApiProperty({
    description: 'Order ID (1 = ascending, 2 = descending)',
  })
  @IsNumber()
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
  "pe_user_name": "John Doe",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_search": "",
  "pe_category_id": 0,
  "pe_flag_no_image": 0,
  "pe_status_id": 0,
  "pe_qt_records": 2,
  "pe_page_id": 0,
  "pe_column_id": 2,
  "pe_order_id": 2
}

*/
