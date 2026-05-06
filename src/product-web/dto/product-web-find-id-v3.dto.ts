import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsOptional,
} from 'class-validator';

export class ProductWebFindIdV3Dto {
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

  @ApiProperty({ description: 'Type Business', example: 1 })
  @IsInt()
  pe_type_business!: number;

  @ApiProperty({ description: 'Product ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_product_id?: number;

  @ApiProperty({
    description: 'Product Slug',
    maxLength: 300,
    example: 'produto-exemplo',
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_product_slug?: string;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_type_business": 1,
  "pe_product_id": 1,
  "pe_product_slug": "sample-product"
}
*/
