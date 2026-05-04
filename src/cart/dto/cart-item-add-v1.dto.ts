import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CartItemAddV1Dto {
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

  @ApiProperty({ description: 'Session Cart ID', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_session_cart_id!: string;

  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_product_id!: number;

  @ApiProperty({ description: 'Quantity' })
  @IsNumber()
  @IsNotEmpty()
  pe_quantity!: number;

  @ApiProperty({ description: 'Source URL', maxLength: 500 })
  @IsString()
  @IsNotEmpty()
  pe_source_url!: string;

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  @IsNotEmpty()
  pe_business_type!: number;

  @ApiProperty({ description: 'Location ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_location_id!: number;

  @ApiProperty({ description: 'IP Address', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_ip_address!: string;

  @ApiProperty({ description: 'ZIP Code', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_zip_code!: string;
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
  "pe_session_cart_id": "SESSION123",
  "pe_product_id": 1001,
  "pe_quantity": 2,
  "pe_source_url": "http://example.com/product/1001",
  "pe_business_type": 1,
  "pe_location_id": 101,
  "pe_ip_address": "192.168.1.1",
  "pe_zip_code": "12345"  
}

*/