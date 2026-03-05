import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductFindAllV3Dto {
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
  pe_person_id: number;

  @ApiProperty({ description: 'Search term', maxLength: 300, required: false })
  @IsString()
  @IsOptional()
  pe_search: string;

  @ApiProperty({ description: 'Taxonomy ID', required: false })
  @IsNumber()
  @IsOptional()
  pe_taxonomy_id: number;

  @ApiProperty({ description: 'Type ID' })
  @IsNumber()
  pe_type_id: number;

  @ApiProperty({ description: 'Brand ID' })
  @IsNumber()
  pe_brand_id: number;

  @ApiProperty({ description: 'Stock flag' })
  @IsNumber()
  pe_flag_stock: number;

  @ApiProperty({ description: 'Service flag' })
  @IsNumber()
  pe_flag_service: number;

  @ApiProperty({ description: 'Record quantity' })
  @IsNumber()
  pe_records_quantity: number;

  @ApiProperty({ description: 'Page ID' })
  @IsNumber()
  pe_page_id: number;

  @ApiProperty({ description: 'Column ID' })
  @IsNumber()
  pe_column_id: number;

  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
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
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_search": "",
  "pe_taxonomy_id": 0,
  "pe_type_id": 0,
  "pe_brand_id": 0,
  "pe_flag_stock":  ,
  "pe_flag_service": 0,
  "pe_records_quantity": 10,
  "pe_page_id": 0,
  "pe_column_id": 1,
  "pe_order_id": 1
}

*/
