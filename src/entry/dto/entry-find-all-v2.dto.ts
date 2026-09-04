import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryFindAllV2Dto extends EndpointContextDto {
  @ApiPropertyOptional({
    description: 'Supplier ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_supplier_id?: number | null;

  @ApiPropertyOptional({
    description: 'Carrier ID (null/0 returns all)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_carrier_id?: number | null;

  @ApiPropertyOptional({
    description: 'Entry model: 1=national; 2=imported; null/0 returns all',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_modelo_id?: number | null;

  @ApiPropertyOptional({
    description: 'Category ID',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_category_id?: number | null;

  @ApiPropertyOptional({
    description: 'Search term (null/empty returns all)',
    maxLength: 300,
  })
  @IsString()
  @IsOptional()
  pe_search?: string | null;

  @ApiPropertyOptional({
    description:
      'Date filter flag: 0=ignore; 1=DATADOCADASTRO; 2=DT_LANCAMENTO; 3=DATA_ENTRADA_ESTOQUE',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_flag_operation_list?: number;

  @ApiPropertyOptional({
    description: 'Start date YYYY-MM-DD; required for flag options 1, 2 and 3',
    maxLength: 300,
  })
  @IsString()
  @IsOptional()
  pe_start_date?: string | null;

  @ApiPropertyOptional({
    description: 'End date YYYY-MM-DD; required for flag options 1, 2 and 3',
    maxLength: 300,
  })
  @IsString()
  @IsOptional()
  pe_end_date?: string | null;

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
    description: 'Order column: 1=stock entry date; 2=ID; 3=registration date',
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
  "pe_supplier_id": null,
  "pe_carrier_id": null,
  "pe_modelo_id": null,
  "pe_category_id": null,
  "pe_search": "",
  "pe_flag_operation_list": 0,
  "pe_start_date": null,
  "pe_end_date": null,
  "pe_qt_records": 20,
  "pe_page_id": 0,
  "pe_column_id": 2,
  "pe_order_id": 2
}
*/
