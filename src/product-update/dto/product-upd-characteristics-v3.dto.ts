import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductUpdCharacteristicsV3Dto {
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

  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  pe_product_id: number;

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

  @ApiProperty({ description: 'Warranty period in months', required: false })
  @IsOptional()
  @IsNumber()
  pe_warranty_period_months: number;
}
