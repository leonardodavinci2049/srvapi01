import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CartUpdSendToV1Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Session Cart ID', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_session_cart_id!: string;

  @ApiProperty({ description: 'Customer Name', maxLength: 100 })
  @IsString()
  @IsOptional()
  pe_customer_name!: string;

  @ApiProperty({ description: 'Payment Form ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_payment_form_id!: number;

  @ApiProperty({ description: 'Public Code', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_public_code!: string;
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
  "pe_session_cart_id": "SESSION123",
  "pe_customer_name": "Customer Name",
  "pe_payment_form_id": 1,
  "pe_public_code": "PUBLIC123"  
}

*/
