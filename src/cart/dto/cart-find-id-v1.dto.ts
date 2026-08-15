import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CartFindIdV1Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Cart ID', maxLength: 100 })
  @IsNumber()
  @IsNotEmpty()
  pe_cart_id!: number;

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  @IsNotEmpty()
  pe_business_type!: number;
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
  "pe_cart_id": 5,
  "pe_business_type": 1  
}

*/
