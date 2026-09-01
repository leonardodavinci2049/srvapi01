import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryItemFindAllV2Dto extends EndpointContextDto {
  @ApiPropertyOptional({
    description: 'Type filter flag accepted by the procedure signature',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_type_id?: number | null;

  @ApiPropertyOptional({
    description:
      'Search term (null/empty returns all; searches item and entry data)',
    maxLength: 300,
  })
  @IsString()
  @IsOptional()
  pe_search?: string | null;

  @ApiPropertyOptional({
    description: 'Records per page (default 100; max 1000)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_qt_records?: number;

  @ApiPropertyOptional({ description: 'Page index (default 0)' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_page_id?: number;

  @ApiPropertyOptional({
    description:
      'Order column: 1=stock entry date; 2=item ID; 3=registration date',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_column_id?: number;

  @ApiPropertyOptional({
    description: 'Order direction: 1=ascending; 2=descending',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_order_id?: number;
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
  "pe_type_id": 0,
  "pe_search": "",
  "pe_qt_records": 20,
  "pe_page_id": 0,
  "pe_column_id": 2,
  "pe_order_id": 2
}
*/
