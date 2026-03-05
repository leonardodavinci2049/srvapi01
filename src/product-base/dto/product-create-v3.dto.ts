import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductCreateV3Dto {
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

  // Product
  @ApiProperty({ description: 'Product Name', maxLength: 300 })
  @IsString()
  @IsNotEmpty()
  pe_product_name: string;

  @ApiProperty({
    description: 'Tab Description',
    maxLength: 500,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_tab_description: string;

  @ApiProperty({
    description: 'Label / Etiqueta',
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_label: string;

  @ApiProperty({
    description: 'Reference / Referência',
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_ref: string;

  @ApiProperty({
    description: 'Model / Modelo',
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_model: string;

  // Relations
  @ApiProperty({ description: 'Supplier ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_supplier_id: number;

  @ApiProperty({ description: 'Product Type ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_product_type_id: number;

  @ApiProperty({ description: 'Brand ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_brand_id: number;

  // Characteristics
  @ApiProperty({ description: 'Weight in grams', required: false })
  @IsOptional()
  @IsNumber()
  pe_weight_gr: number;

  @ApiProperty({ description: 'Length in mm', required: false })
  @IsOptional()
  @IsNumber()
  pe_length_mm: number;

  @ApiProperty({ description: 'Width in mm', required: false })
  @IsOptional()
  @IsNumber()
  pe_width_mm: number;

  @ApiProperty({ description: 'Height in mm', required: false })
  @IsOptional()
  @IsNumber()
  pe_height_mm: number;

  @ApiProperty({ description: 'Diameter in mm', required: false })
  @IsOptional()
  @IsNumber()
  pe_diameter_mm: number;

  @ApiProperty({ description: 'Warranty period in days', required: false })
  @IsOptional()
  @IsNumber()
  pe_warranty_period_days: number;

  // Price
  @ApiProperty({ description: 'Wholesale sale price', required: false })
  @IsOptional()
  @IsNumber()
  pe_wholesale_price: number;

  @ApiProperty({ description: 'Retail sale price', required: false })
  @IsOptional()
  @IsNumber()
  pe_retail_price: number;

  @ApiProperty({ description: 'Corporate price', required: false })
  @IsOptional()
  @IsNumber()
  pe_corporate_price: number;

  // Stock
  @ApiProperty({ description: 'Stock quantity', required: false })
  @IsOptional()
  @IsNumber()
  pe_stock_quantity: number;

  // flags
  @ApiProperty({ description: 'Website off flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_website_off_flag: number;

  @ApiProperty({ description: 'Imported flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_imported_flag: number;

  // notes
  @ApiProperty({ description: 'Additional info', required: false })
  @IsOptional()
  @IsString()
  pe_additional_info: string;
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

  "pe_business_type": 1,
  "pe_product_name": "Product Name5",

  "pe_tab_description": "Tab Description5",
  "pe_label": "Label5",
  "pe_ref": "REF12345",
  "pe_model": "ModelX",
  "pe_supplier_id": 1001,

  "pe_product_type_id": 1,
  "pe_brand_id": 1,

  "pe_weight_gr": 500,
  "pe_length_mm": 200,
  "pe_width_mm": 150,
  "pe_height_mm": 100,
  "pe_diameter_mm": null,

  "pe_warranty_period_days": 365,

  "pe_wholesale_price": 50.00,
  "pe_retail_price": 75.00,
  "pe_corporate_price": 65.00,

  "pe_stock_quantity": 100,

  "pe_website_off_flag": 0,
  "pe_imported_flag": 1,
  
  "pe_additional_info": "This is a sample product for testing."
}

*/
