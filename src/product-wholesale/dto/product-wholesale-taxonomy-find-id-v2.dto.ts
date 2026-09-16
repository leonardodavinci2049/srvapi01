import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductWholesaleTaxonomyFindIdV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Taxonomy ID', example: 3055 })
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  pe_id_taxonomy!: number;
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
  "pe_id_taxonomy": 3055
}
*/
