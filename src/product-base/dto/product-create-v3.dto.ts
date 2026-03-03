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
