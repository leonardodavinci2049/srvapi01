import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CostumerFindAllDto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsNotEmpty()
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_person_id: number;

  @ApiProperty({ description: 'Search term', maxLength: 300 })
  @IsString()
  pe_search: string;

  @ApiProperty({ description: 'QT_REGISTROS' })
  @IsNumber()
  @IsNotEmpty()
  pe_qt_registros: number;

  @ApiProperty({ description: 'PAGE_ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_page_id: number;

  @ApiProperty({ description: 'COLUMN_ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_column_id: number;

  @ApiProperty({ description: 'ORDER_ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_order_id: number;
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
