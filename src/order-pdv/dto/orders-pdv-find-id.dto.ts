import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrdersPdvFindIdDto extends EndpointContextDto {
  @ApiProperty({
    description: 'Customer ID (reserved and unused by this procedure)',
    example: 0,
  })
  @IsInt()
  pe_customer_id!: number;

  @ApiProperty({
    description: 'Seller ID (reserved and unused by this procedure)',
    example: 0,
  })
  @IsInt()
  pe_seller_id!: number;

  @ApiProperty({
    description: 'Order ID (mapped to PE_ID_PEDIDO in the procedure)',
    example: 502888,
  })
  @IsInt()
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
  "pe_user_name": "Test User",
  "pe_user_role": "admin",
  "pe_person_id": 1937,
  "pe_customer_id": 0,
  "pe_seller_id": 0,
  "pe_order_id": 502888
}
*/
