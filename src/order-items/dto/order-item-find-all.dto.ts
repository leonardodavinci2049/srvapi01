import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrderItemFindAllDto extends EndpointContextDto {
  @ApiProperty({ description: 'Order ID', required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_order_id?: number;

  @ApiProperty({ description: 'Page size', required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @Min(1)
  pe_limit?: number;
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
  "pe_order_id": 480669,
  "limit": 10
}
*/
