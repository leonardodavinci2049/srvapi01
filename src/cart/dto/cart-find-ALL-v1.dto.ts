import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CartFindAllV1Dto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id!: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id!: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id!: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id!: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsNotEmpty()
  @IsString()
  pe_user_id!: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name!: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role!: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id!: number;

  @ApiProperty({ description: 'Search', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_search!: string;

  @ApiProperty({ description: 'Status ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_status_id!: number;

  @ApiProperty({ description: 'Start Date', maxLength: 10 })
  @IsString()
  @IsNotEmpty()
  pe_start_date!: string;

  @ApiProperty({ description: 'End Date', maxLength: 10 })
  @IsString()
  @IsNotEmpty()
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
  "pe_search": "search term",
  "pe_status_id": 1,
  "pe_start_date": "2023-01-01",
  "pe_end_date": "2023-12-31",
  "pe_limit": 10  
}

*/
