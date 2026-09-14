import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class AppMenuFindTypeV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  pe_customer_id!: number;

  @ApiProperty({ description: 'Menu type', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  pe_type!: string;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 4,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG-TEST",
  "pe_user_id": "USER-TEST",
  "pe_user_name": "API Test",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_customer_id": 123,
  "pe_type": "HEADER"
}

*/
