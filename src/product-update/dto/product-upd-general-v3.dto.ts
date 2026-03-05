import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductUpdGeneralV3Dto {
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

  @ApiProperty({ description: 'Product name', maxLength: 255, required: false })
  @IsOptional()
  @IsString()
  pe_product_name: string;

  @ApiProperty({ description: 'Reference', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  pe_ref: string;

  @ApiProperty({ description: 'Model', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  pe_model: string;

  @ApiProperty({
    description: 'Label / Etiqueta',
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_label: string;

  @ApiProperty({
    description: 'Tab description',
    maxLength: 200,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_tab_description: string;
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
  "pe_product_name": "Sample Product Name",
  "pe_ref": "REF001",
  "pe_model": "MODEL001",
  "pe_label": "Label1",
  "pe_tab_description": "This is a tab description."  

}

*/
