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
