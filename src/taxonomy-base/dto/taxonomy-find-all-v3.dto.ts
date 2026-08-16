import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyFindAllV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Parent Taxonomy ID' })
  @IsNumber()
  @IsOptional()
  pe_parent_id!: number;

  @ApiProperty({ description: 'Search term', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_search!: string;

  @ApiProperty({ description: 'Inactive flag (0=active, 1=inactive)' })
  @IsNumber()
  @IsOptional()
  pe_flag_inactive!: number;

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
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_parent_id": 0,
  "pe_search": "",
  "pe_flag_inactive": 0,
  "pe_records_quantity": 20,
  "pe_page_id": 0,
  "pe_column_id": 1,
  "pe_order_id": 1

}
*/
