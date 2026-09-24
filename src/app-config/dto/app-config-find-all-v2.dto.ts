import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class AppConfigFindAllV2Dto extends EndpointContextDto {
  @ApiPropertyOptional({
    description:
      'Search term: numeric matches ID or APP_NAME, text matches APP_NAME; empty returns all',
    maxLength: 100,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  pe_search?: string;

  @ApiProperty({ description: 'Maximum number of records to return' })
  @IsInt()
  @IsNotEmpty()
  pe_limit!: number;
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
  "pe_search": "",
  "pe_limit": 50
}

*/
