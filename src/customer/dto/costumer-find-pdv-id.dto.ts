import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CostumerFindPdvIdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Seller ID' })
  @IsNumber()
  pe_seller_id!: number;

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  pe_customer_id!: number;
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
  "pe_seller_id": 1001,
  "pe_customer_id": 47723
}

*/
