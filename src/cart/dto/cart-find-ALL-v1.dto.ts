import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CartFindAllV1Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Search', maxLength: 200 })
  @IsString()
  @IsOptional()
  pe_search!: string;

  @ApiProperty({ description: 'Status ID' })
  @IsNumber()
  @IsOptional()
  pe_status_id!: number;

  @ApiProperty({ description: 'Start Date', maxLength: 10 })
  @IsString()
  @IsOptional()
  pe_start_date!: string;

  @ApiProperty({ description: 'End Date', maxLength: 10 })
  @IsString()
  @IsOptional()
  pe_end_date!: string;

  @ApiProperty({ description: 'Limit' })
  @IsNumber()
  @IsNotEmpty()
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
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,

  "pe_search": "",
  "pe_status_id": 0,
  "pe_start_date": "2026-01-01",
  "pe_end_date": "2026-12-31",
  "pe_limit": 10  
}

*/
