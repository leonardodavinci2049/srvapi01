import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyCreateV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Taxonomy Type ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_type_id!: number;

  @ApiProperty({ description: 'Parent Taxonomy ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_parent_id!: number;

  @ApiProperty({ description: 'Taxonomy Name', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_taxonomy_name!: string;

  @ApiProperty({ description: 'Taxonomy Slug', maxLength: 300 })
  @IsString()
  @IsNotEmpty()
  pe_slug!: string;

  @ApiProperty({ description: 'Taxonomy Level' })
  @IsNumber()
  @IsOptional()
  pe_level!: number;
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
  "pe_type_id": 123,
  "pe_parent_id": 0,
  "pe_taxonomy_name": "Sample Taxonomy",
  "pe_slug": "sample-taxonomy",
  "pe_level": 1

}

*/
