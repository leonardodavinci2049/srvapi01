import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyUpdInlSlugV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_taxonomy_id!: number;

  @ApiProperty({ description: 'Slug', maxLength: 300 })
  @IsString()
  @IsNotEmpty()
  pe_slug!: string;
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
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_taxonomy_id": 3566,
  "pe_slug": "sample-taxonomy-slug"
}

*/
