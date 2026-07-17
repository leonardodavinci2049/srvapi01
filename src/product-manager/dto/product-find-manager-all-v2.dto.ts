import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductFindManagerAllV2Dto {
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

  @ApiProperty({ description: 'Search term', maxLength: 300 })
  @IsString()
  pe_search!: string;

  @ApiProperty({ description: 'EAN', maxLength: 200 })
  @IsString()
  pe_ean!: string;

  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  pe_taxonomy_id!: number;

  @ApiProperty({ description: 'Type ID' })
  @IsNumber()
  pe_type_id!: number;

  @ApiProperty({ description: 'Brand ID' })
  @IsNumber()
  pe_brand_id!: number;

  @ApiProperty({ description: 'Supplier ID' })
  @IsNumber()
  pe_supplier_id!: number;

  @ApiProperty({ description: 'Physical product ID' })
  @IsNumber()
  pe_physical_id!: number;

  @ApiProperty({
    description:
      'Sales list: 0 all, 1 best sellers, 2 lowest selling, 3 stalled',
  })
  @IsNumber()
  pe_flag_sales_list!: number;

  @ApiProperty({
    description:
      'Stock list: 0 all, 1 in stock, 2 stock up to 2, 3 latest arrivals',
  })
  @IsNumber()
  pe_flag_stock_list!: number;

  @ApiProperty({ description: 'No image flag' })
  @IsNumber()
  pe_flag_no_image!: number;

  @ApiProperty({ description: 'No description flag' })
  @IsNumber()
  pe_flag_no_description!: number;

  @ApiProperty({ description: 'No sales copy flag' })
  @IsNumber()
  pe_flag_no_sales_copy!: number;

  @ApiProperty({
    description: 'Advanced filter: 0 all, 1 wholesale price below 1, 2 service',
  })
  @IsNumber()
  pe_flag_advanced!: number;

  @ApiProperty({ description: 'Inactive flag' })
  @IsNumber()
  pe_flag_inactive!: number;

  @ApiProperty({ description: 'Imported flag' })
  @IsNumber()
  pe_flag_imported!: number;

  @ApiProperty({ description: 'Premium flag: 0 all, 1 premium' })
  @IsNumber()
  pe_flag_premium!: number;

  @ApiProperty({
    description:
      'Various lists: 0 all, 1 promotion, 2 featured, 3 consignment, 4 discontinued, 5 no inventory control, 6 website off',
  })
  @IsNumber()
  pe_flag_various_lists!: number;

  @ApiProperty({
    description:
      'Operation list: 0 ignore period, 1 filter by registration date',
  })
  @IsNumber()
  pe_flag_operation_list!: number;

  @ApiProperty({ description: 'Registration start date', maxLength: 300 })
  @IsString()
  pe_start_date!: string;

  @ApiProperty({ description: 'Registration end date', maxLength: 300 })
  @IsString()
  pe_end_date!: string;

  @ApiProperty({ description: 'Record quantity' })
  @IsNumber()
  pe_records_quantity!: number;

  @ApiProperty({ description: 'Page ID' })
  @IsNumber()
  pe_page_id!: number;

  @ApiProperty({ description: 'Column ID' })
  @IsNumber()
  pe_column_id!: number;

  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
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
  "pe_search": "",
  "pe_ean": "",
  "pe_taxonomy_id": 0,
  "pe_type_id": 0,
  "pe_brand_id": 0,
  "pe_supplier_id": 0,
  "pe_physical_id": 0,
  "pe_flag_sales_list": 0,
  "pe_flag_stock_list": 0,
  "pe_flag_no_image": 0,
  "pe_flag_no_description": 0,
  "pe_flag_no_sales_copy": 0,
  "pe_flag_advanced": 0,
  "pe_flag_inactive": 0,
  "pe_flag_imported": 0,
  "pe_flag_premium": 0,
  "pe_flag_various_lists": 0,
  "pe_flag_operation_list": 0,
  "pe_start_date": "",
  "pe_end_date": "",
  "pe_records_quantity": 2,
  "pe_page_id": 0,
  "pe_column_id": 2,
  "pe_order_id": 2
}

*/
