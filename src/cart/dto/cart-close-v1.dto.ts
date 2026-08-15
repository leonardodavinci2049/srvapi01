import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CartCloseV1Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Cart ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_cart_id!: number;

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_customer_id!: number;

  @ApiProperty({ description: 'Seller ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_seller_id!: number;
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
  "pe_cart_id": 0,
  "pe_customer_id": 456,
  "pe_seller_id": 789  
}

*/
