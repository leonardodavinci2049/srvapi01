import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyFindMenuDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

  // Optional filters
  @ApiProperty({ description: 'Type ID', required: false })
  @IsNumber()
  @IsNotEmpty()
  pe_id_tipo!: number; //

  @ApiProperty({ description: 'Parent ID', required: false })
  @IsNumber()
  @IsOptional()
  pe_parent_id!: number;
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
  "pe_id_tipo": 2,
  "pe_parent_id": 10
}
*/
