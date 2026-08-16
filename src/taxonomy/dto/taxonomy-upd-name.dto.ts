import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyUpdNameDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsNotEmpty()
  @IsString()
  pe_member_id!: string;

  // PE_ID_TAXONOMY

  @ApiProperty({ description: 'Taxonomy ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_taxonomy!: number;

  // PE_TAXONOMIA

  @ApiProperty({
    description: 'Taxonomy Name',
    maxLength: 200,
    example: 'New Taxonomy Name',
  })
  @IsNotEmpty()
  @IsString()
  pe_taxonomia!: string;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 100,
  "pe_store_id": 5,
  "pe_organization_id": "ORG_12345",
  "pe_member_id": "MBR_67890",
  "pe_user_id": "USR_54321",
  "pe_person_id": 999,
  "pe_id_taxonomy": 10,
  "pe_taxonomia": "New Taxonomy Name"
}
*/
