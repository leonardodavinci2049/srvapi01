import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TypeUpdateV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Type ID' })
  @IsNumber()
  pe_type_id!: number;

  @ApiProperty({ description: 'Type', maxLength: 100 })
  @IsString()
  pe_type!: string;

  @ApiProperty({ description: 'Slug', maxLength: 100 })
  @IsString()
  pe_slug!: string;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_notes!: string;

  @ApiProperty({ description: 'Inactive' })
  @IsNumber()
  pe_inactive!: number;
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
  "pe_type_id": 30,
  "pe_type": "Example Type",
  "pe_slug": "example-type",
  "pe_notes": "These are some notes about the type.",
  "pe_inactive": 0

}

*/
