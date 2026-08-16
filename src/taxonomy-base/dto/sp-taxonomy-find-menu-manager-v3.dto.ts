import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Max, Min } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class SpTaxonomyFindMenuManagerV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Maximum number of taxonomies', maximum: 10000 })
  @IsNumber()
  @Min(1)
  @Max(10000)
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
  "pe_user_name": "John Doe",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_limit": 100
}
*/
