import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrderItemDeleteDto extends EndpointContextDto {
  @ApiProperty({ description: 'Movement ID' })
  @IsNumber()
  pe_movement_id!: number;
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
  "pe_user_name": "John Doe",
  "pe_movement_id": 12345
}
*/
