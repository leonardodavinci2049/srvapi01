import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MaxLength } from 'class-validator';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CustomerPdvSearchV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Search term', example: '47723', maxLength: 200 })
  @IsString()
  @MaxLength(200)
  pe_search!: string;

  @ApiProperty({
    description: 'Records per page (less than 1 = 100; capped at 1000)',
    example: 100,
  })
  @IsInt()
  pe_qt_registros!: number;

  @ApiProperty({ description: 'Page index (0 = first page)', example: 0 })
  @IsInt()
  pe_pagina_id!: number;

  @ApiProperty({ description: 'Sort column (1 = name; 2 = ID)', example: 1 })
  @IsInt()
  pe_coluna_id!: number;

  @ApiProperty({
    description: 'Sort direction (1 = ascending; 2 = descending)',
    example: 1,
  })
  @IsInt()
  pe_ordem_id!: number;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "Test User",
  "pe_user_role": "admin",
  "pe_person_id": 1937,
  "pe_search": "47723",
  "pe_qt_registros": 100,
  "pe_pagina_id": 0,
  "pe_coluna_id": 1,
  "pe_ordem_id": 1
}
*/
