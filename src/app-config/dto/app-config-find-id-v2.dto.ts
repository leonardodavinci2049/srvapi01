import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class AppConfigFindIdV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'App configuration ID' })
  @IsInt()
  @IsNotEmpty()
  pe_config_id!: number;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 4,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG-TEST",
  "pe_user_id": "USER-TEST",
  "pe_user_name": "API Test",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_config_id": 1
}

*/
