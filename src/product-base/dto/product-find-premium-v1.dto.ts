import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductFindPremiumV1Dto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id!: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id!: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id!: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id!: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsNotEmpty()
  @IsString()
  pe_user_id!: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name!: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role!: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id!: number;

  @ApiProperty({ description: 'Search', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_search?: string;

  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  @IsOptional()
  pe_taxonomy_id?: number;

  @ApiProperty({ description: 'Type ID' })
  @IsNumber()
  @IsOptional()
  pe_Type_id?: number;

  @ApiProperty({ description: 'Brand ID' })
  @IsNumber()
  @IsOptional()
  pe_brand_id?: number;

  @ApiProperty({ description: 'Stock Flag' })
  @IsNumber()
  @IsOptional()
  pe_stock_flag?: number;

  @ApiProperty({ description: 'Service Flag' })
  @IsNumber()
  @IsOptional()
  pe_flag_Service?: number;

  @ApiProperty({ description: 'Promotions Flag' })
  @IsNumber()
  @IsOptional()
  pe_flag_Promotions?: number;

  @ApiProperty({ description: 'Highlight Flag' })
  @IsNumber()
  @IsOptional()
  pe_flag_Highlight?: number;

  @ApiProperty({ description: 'Launch Flag' })
  @IsNumber()
  @IsOptional()
  pe_flag_Launch?: number;

  @ApiProperty({ description: 'Quantity of Records' })
  @IsNumber()
  @IsOptional()
  pe_records_quantity?: number;

  @ApiProperty({ description: 'Page ID' })
  @IsNumber()
  @IsOptional()
  pe_pageId?: number;

  @ApiProperty({ description: 'Column ID' })
  @IsNumber()
  @IsOptional()
  pe_columnId?: number;

  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  @IsOptional()
  pe_orderId?: number;
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
    "pe_search": "TECLADO",
    "pe_taxonomy_id": 123,
    "pe_Type_id": 0,
    "pe_brand_id": 0,

    "pe_stock_flag": 0,
    "pe_flag_Service": 0,

    "pe_flag_Promotions": 0,
    "pe_flag_Highlight": 0,
    "pe_flag_Launch":0,

    "pe_records_quantity": 2,
    "pe_pageId": 1,
    "pe_columnId": 2,
    "pe_orderId": 3


*/
