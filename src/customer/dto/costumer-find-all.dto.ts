import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CostumerFindAllDto extends EndpointContextDto {
  @ApiProperty({ description: 'Search term', maxLength: 300 })
  @IsString()
  pe_search!: string;

  @ApiProperty({ description: 'QT_REGISTROS' })
  @IsNumber()
  @IsNotEmpty()
  pe_qt_registros!: number;

  @ApiProperty({ description: 'PAGE_ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_page_id!: number;

  @ApiProperty({ description: 'COLUMN_ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_column_id!: number;

  @ApiProperty({ description: 'ORDER_ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_order_id!: number;
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
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_search": "search term",
  "pe_qt_registros": 10,
  "pe_page_id": 0,
  "pe_column_id": 2,
  "pe_order_id": 1

}
*/
