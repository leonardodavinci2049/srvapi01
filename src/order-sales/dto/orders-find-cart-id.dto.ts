import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrdersFindCartIdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  @IsOptional()
  pe_order_id!: number;

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsOptional()
  pe_id_customer!: number;

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  @IsOptional()
  pe_type_business!: number;
}

/*
Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "org123",
  "pe_user_id": "user123",
  "pe_user_name": "John Doe",
  "pe_user_role": "admin",
  "pe_person_id": 123,

  "pe_order_id": 480670,
  "pe_id_customer": 29014,
  "pe_type_business": 1
}
*/
