import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrderOperCreateDto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  pe_customer_id!: number;

  @ApiProperty({ description: 'Seller ID' })
  @IsNumber()
  pe_seller_id!: number;

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  pe_business_type!: number;

  @ApiProperty({ description: 'Payment Form ID' })
  @IsNumber()
  pe_payment_form_id!: number;

  @ApiProperty({ description: 'Location ID' })
  @IsNumber()
  pe_location_id!: number;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_notes!: string;
}

/*Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_customer_id": 29014,
  "pe_seller_id": 29014,
  "pe_business_type": 1,
  "pe_payment_form_id": 1,
  "pe_location_id": 3,
  "pe_notes": "Order created via API"
}
*/
