import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductWebSectionsV3Dto {
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

  @ApiProperty({ description: 'Taxonomy ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_taxonomy_id?: number;

  @ApiProperty({ description: 'Brand ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_brand_id?: number;

  @ApiProperty({ description: 'Type ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_type_id?: number;

  @ApiProperty({ description: 'Promotions Flag', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_promotions?: number;

  @ApiProperty({ description: 'Highlight Flag', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_highlight?: number;

  @ApiProperty({ description: 'Launch Flag', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_launch_flag?: number;

  @ApiProperty({
    description: 'Number of Records',
    example: 10,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_record_count?: number;

  @ApiProperty({ description: 'Page ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_page_id?: number;

  @ApiProperty({ description: 'Column ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_column_id?: number;

  @ApiProperty({ description: 'Order ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_order_id?: number;
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
  "pe_taxonomy_id": 1,
  "pe_brand_id": 1,
  "pe_type_id": 1,
  "pe_flag_promotions": 1,
  "pe_flag_highlight": 1,
  "pe_launch_flag": 1,
  "pe_record_count": 10,
  "pe_page_id": 1,
  "pe_column_id": 1,
  "pe_order_id": 1
}
*/
