import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrdersFindSellerIdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_order_id!: number;

  @ApiProperty({ description: 'Salesperson ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_seller_id!: number;

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
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
  "pe_order_id": 480653,
  "pe_seller_id": 1,
  "pe_type_business": 1

}
*/
