import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyUpdMetadataV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_taxonomy_id!: number;

  @ApiProperty({ description: 'Meta Title', maxLength: 300 })
  @IsString()
  pe_meta_title!: string;

  @ApiProperty({ description: 'Meta Description', maxLength: 500 })
  @IsString()
  pe_meta_description!: string;

  @ApiProperty({ description: 'Meta Keywords', maxLength: 500 })
  @IsString()
  pe_meta_keywords!: string;
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
  "pe_taxonomy_id": 3566,
  "pe_meta_title": "Sample Meta Title",
  "pe_meta_description": "Sample meta description for SEO",
  "pe_meta_keywords": "keyword1, keyword2, keyword3"
}


*/
