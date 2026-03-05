import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductUpdFlagsV3Dto {
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

  @ApiProperty({ description: 'Inactive flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_inactive_flag: number;

  @ApiProperty({ description: 'Imported flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_imported_flag: number;

  @ApiProperty({ description: 'Physical control flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_physical_control_flag: number;

  @ApiProperty({ description: 'Stock control flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_stock_control_flag: number;

  @ApiProperty({ description: 'Featured flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_featured_flag: number;

  @ApiProperty({ description: 'Promotion flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_promotion_flag: number;

  @ApiProperty({ description: 'Discontinued flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_discontinued_flag: number;

  @ApiProperty({ description: 'Service flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_service_flag: number;

  @ApiProperty({ description: 'Website off flag (0/1)', required: false })
  @IsOptional()
  @IsNumber()
  pe_website_off_flag: number;
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
  "pe_product_id": 56813,
  "pe_inactive_flag": 0,
  "pe_imported_flag": 1,
  "pe_physical_control_flag": 0,
  "pe_stock_control_flag": 1,
  "pe_featured_flag": 0,
  "pe_promotion_flag": 1,
  "pe_discontinued_flag": 0,
  "pe_service_flag": 0,
  "pe_website_off_flag": 1

}

*/
