import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductFindPdvSearchV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  pe_customer_id!: number;

  @ApiProperty({ description: 'Search term', maxLength: 300 })
  @IsString()
  pe_search!: string;

  @ApiProperty({ description: 'Stock flag' })
  @IsNumber()
  pe_flag_stock!: number;

  @ApiProperty({ description: 'Limit' })
  @IsNumber()
  pe_limit!: number;
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
  "pe_customer_id": 12345,
  "pe_search": "Product Name",
  "pe_flag_stock": 1,
  "pe_limit": 10
  }

*/
