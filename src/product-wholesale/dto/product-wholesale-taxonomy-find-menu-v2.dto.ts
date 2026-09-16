import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductWholesaleTaxonomyFindMenuV2Dto extends EndpointContextDto {
  @ApiProperty({
    description: 'Maximum number of taxonomies',
    example: 1000,
    maximum: 10000,
  })
  @IsNumber()
  @Min(1)
  @Max(10000)
  @Type(() => Number)
  pe_limit!: number;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_limit": 1000
}
*/
