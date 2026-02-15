import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductFindPdvAllV2Dto {
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
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Member Role', maxLength: 200 })
  @IsString()
  pe_member_role: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  pe_id_product: number;

  @ApiProperty({ description: 'Product name', maxLength: 300 })
  @IsString()
  pe_product: string;

  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  pe_id_taxonomy: number;

  @ApiProperty({ description: 'Type ID' })
  @IsNumber()
  pe_id_type: number;

  @ApiProperty({ description: 'Brand ID' })
  @IsNumber()
  pe_id_brand: number;

  @ApiProperty({ description: 'Stock flag' })
  @IsNumber()
  pe_flag_stock: number;

  @ApiProperty({ description: 'Service flag' })
  @IsNumber()
  pe_flag_service: number;

  @ApiProperty({ description: 'Record quantity' })
  @IsNumber()
  pe_qt_records: number;

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
  "pe_store_id": 3,
  "pe_organization_id": "ORG001",
  "pe_member_role": "saller",
  "pe_user_id": "USER001",
  "pe_person_id": 29014,
  "pe_id_product": 123,
  "pe_product": "Product Name",
  "pe_id_taxonomy": 10,
  "pe_id_type": 5,
  "pe_id_brand": 2,
  "pe_flag_stock": 1,
  "pe_flag_service": 0,
  "pe_qt_records": 50,
  "pe_page_id": 1,
  "pe_column_id": 10,
  "pe_order_id": 1

}

*/
