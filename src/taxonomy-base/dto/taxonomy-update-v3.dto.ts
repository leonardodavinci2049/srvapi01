import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class TaxonomyUpdateV3Dto {
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

  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_taxonomy_id: number;

  @ApiProperty({ description: 'Parent Taxonomy ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_parent_id: number;

  @ApiProperty({ description: 'Taxonomy Name', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_taxonomy_name: string;

  @ApiProperty({ description: 'Taxonomy Slug', maxLength: 300 })
  @IsString()
  @IsNotEmpty()
  pe_slug: string;

  @ApiProperty({ description: 'Image Path', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_image_path: string;

  @ApiProperty({ description: 'Sort Order' })
  @IsNumber()
  @IsOptional()
  pe_sort_order: number;

  @ApiProperty({ description: 'Meta Title', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_meta_title: string;

  @ApiProperty({ description: 'Meta Description', maxLength: 500 })
  @IsString()
  @IsOptional()
  pe_meta_description: string;

  @ApiProperty({ description: 'Inactive flag (0=active, 1=inactive)' })
  @IsNumber()
  @IsOptional()
  pe_inactive: number;

  @ApiProperty({ description: 'Additional info (text)' })
  @IsString()
  @IsOptional()
  pe_info: string;
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
  "pe_taxonomy_id": 3569,
  "pe_parent_id": 0,
  "pe_taxonomy_name": "Sample Taxonomy Name",
  "pe_slug": "sample-taxonomy-slug",
  "pe_image_path": "/images/sample.jpg",
  "pe_sort_order": 1,
  "pe_meta_title": "Sample Meta Title",
  "pe_meta_description": "This is a sample meta description for the taxonomy.",
  "pe_inactive": 0,
  "pe_info": "Additional information about the taxonomy."

}


*/
