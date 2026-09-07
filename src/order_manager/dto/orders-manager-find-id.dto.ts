import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrdersManagerFindIdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Order ID (tbl_pedido.ID_TBL_PEDIDO)' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
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
  "pe_user_name": "John Doe",
  "pe_user_role": "orders_manager",
  "pe_person_id": 1937,
  "pe_order_id": 502888
}
*/
