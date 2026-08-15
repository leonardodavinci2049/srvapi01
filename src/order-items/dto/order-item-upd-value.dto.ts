import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrderItemUpdValueDto extends EndpointContextDto {
  @ApiProperty({ description: 'Order Item ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_order_item_id!: number;

  @ApiProperty({ description: 'Item Value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_item_value!: number;
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
  "pe_order_item_id": 722070,
  "pe_item_value": 10
}
*/
