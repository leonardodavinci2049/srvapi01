import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class PhysicalProductWarrantySearchV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsOptional()
  pe_customer_id!: number;

  @ApiProperty({ description: 'Search' })
  @IsString()
  @IsOptional()
  pe_search!: string;

  @ApiProperty({ description: 'Limit' })
  @IsNumber()
  @IsOptional()
  pe_limit!: number;
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
  "pe_customer_id": 0,
  "pe_search": 44639,
  "pe_limit": 2
}
*/
