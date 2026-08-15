import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrderUpdSellerIdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_order_id!: number;

  @ApiProperty({ description: 'Seller ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_seller_id!: number;
}
/*Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "org123",
  "pe_user_id": "user123",
  "pe_user_name": "John Doe",
  "pe_user_role": "admin",
  "pe_person_id": 123,
  "pe_order_id": 480669,
  "pe_seller_id": 456
  
}
*/
