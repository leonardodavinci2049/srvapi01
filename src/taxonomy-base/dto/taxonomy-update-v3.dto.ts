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
