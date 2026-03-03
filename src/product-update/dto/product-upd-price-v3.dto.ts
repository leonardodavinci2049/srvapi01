import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductUpdPriceV3Dto {
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

  @ApiProperty({ description: 'Wholesale sale price', required: false })
  @IsOptional()
  @IsNumber()
  pe_wholesale_price: number;

  @ApiProperty({ description: 'Corporate sale price', required: false })
  @IsOptional()
  @IsNumber()
  pe_corporate_price: number;

  @ApiProperty({ description: 'Retail sale price', required: false })
  @IsOptional()
  @IsNumber()
  pe_retail_price: number;
}
