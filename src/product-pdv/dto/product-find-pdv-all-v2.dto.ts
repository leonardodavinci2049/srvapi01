import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductFindPdvAllV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Search term', maxLength: 300 })
  @IsString()
  pe_search!: string;

  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  pe_taxonomy_id!: number;

  @ApiProperty({ description: 'Type ID' })
  @IsNumber()
  pe_type_id!: number;

  @ApiProperty({ description: 'Brand ID' })
  @IsNumber()
  pe_brand_id!: number;

  @ApiProperty({ description: 'Stock flag' })
  @IsNumber()
  pe_flag_stock!: number;

  @ApiProperty({ description: 'Service flag' })
  @IsNumber()
  pe_flag_service!: number;

  @ApiProperty({ description: 'Record quantity' })
  @IsNumber()
  pe_records_quantity!: number;

  @ApiProperty({ description: 'Page ID' })
  @IsNumber()
  pe_page_id!: number;

  @ApiProperty({ description: 'Column ID' })
  @IsNumber()
  pe_column_id!: number;

  @ApiProperty({ description: 'Order ID' })
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
  "pe_search": "search term",
  "pe_taxonomy_id": 10,
  "pe_type_id": 20,
  "pe_brand_id": 30,
  "pe_flag_stock": 1,
  "pe_flag_service": 0,     
  "pe_records_quantity": 100,
  "pe_page_id": 1,
  "pe_column_id": 1,
  "pe_order_id": 1
  }

*/
