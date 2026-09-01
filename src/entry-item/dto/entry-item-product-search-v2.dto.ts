import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryItemProductSearchV2Dto extends EndpointContextDto {
  @ApiPropertyOptional({
    description: 'Supplier ID filter (null/<=0 returns all products)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_supplier_id?: number | null;

  @ApiPropertyOptional({
    description: 'Search term (null/empty returns all products)',
    maxLength: 300,
  })
  @IsString()
  @IsOptional()
  pe_search?: string | null;

  @ApiPropertyOptional({ description: 'Max records (default 100; max 1000)' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_limit?: number;
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
  "pe_supplier_id": 0,
  "pe_search": "",
  "pe_limit": 20
}
*/
