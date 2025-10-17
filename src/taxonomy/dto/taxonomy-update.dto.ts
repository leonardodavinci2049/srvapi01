import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class TaxonomyUpdateDto {
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

  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Taxonomy ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_taxonomy?: number;

  @ApiProperty({ description: 'Parent ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_parent_id?: number;

  @ApiProperty({ description: 'Taxonomy', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  pe_taxonomia?: string;

  @ApiProperty({ description: 'Slug', maxLength: 300, required: false })
  @IsOptional()
  @IsString()
  pe_slug?: string;

  @ApiProperty({ description: 'Image Path', maxLength: 300, required: false })
  @IsOptional()
  @IsString()
  pe_path_imagem?: string;

  @ApiProperty({ description: 'Order', required: false })
  @IsOptional()
  @IsNumber()
  pe_ordem?: number;

  @ApiProperty({ description: 'Meta Title', maxLength: 300, required: false })
  @IsOptional()
  @IsString()
  pe_meta_title?: string;

  @ApiProperty({
    description: 'Meta Description',
    maxLength: 500,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_meta_description?: string;

  @ApiProperty({ description: 'Inactive', required: false })
  @IsOptional()
  @IsNumber()
  pe_inativo?: number;

  @ApiProperty({ description: 'Info', required: false })
  @IsOptional()
  @IsString()
  pe_info?: string;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 100,
  "pe_store_id": 5,
  "pe_organization_id": "ORG_12345",
  "pe_member_id": "MBR_67890",
  "pe_user_id": "USR_54321",
  "pe_person_id": 999,
  "pe_id_taxonomy": 456,
  "pe_parent_id": 123,
  "pe_taxonomia": "Electronics",
  "pe_slug": "electronics-category",
  "pe_path_imagem": "/images/categories/electronics.jpg",
  "pe_ordem": 1,
  "pe_meta_title": "Electronics Category - Best Products",
  "pe_meta_description": "Discover our wide range of electronic products including smartphones, laptops, and accessories.",
  "pe_inativo": 0,
  "pe_info": "Category for all electronic products"
}
*/
