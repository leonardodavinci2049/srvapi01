import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CheckIfExistsV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Parent ID' })
  @IsNumber()
  @IsOptional()
  pe_parent_id!: number;

  @ApiProperty({ description: 'Search term', minLength: 3 })
  @IsString({ message: 'TERMO must be a valid string' })
  @IsNotEmpty()
  @MinLength(3, { message: 'TERMO must have at least 3 characters' })
  pe_term!: string;
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
  "pe_parent_id": 123,
  "pe_term": "search term"

}

*/
