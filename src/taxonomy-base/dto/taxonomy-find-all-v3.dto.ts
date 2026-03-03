import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class TaxonomyFindAllV3Dto {
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

  @ApiProperty({ description: 'Parent Taxonomy ID' })
  @IsNumber()
  @IsOptional()
  pe_parent_id: number;

  @ApiProperty({ description: 'Search term', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_search: string;

  @ApiProperty({ description: 'Inactive flag (0=active, 1=inactive)' })
  @IsNumber()
  @IsOptional()
  pe_flag_inactive: number;

  @ApiProperty({ description: 'Number of records per page' })
  @IsNumber()
  @IsOptional()
  pe_records_quantity: number;

  @ApiProperty({ description: 'Page number (pagination)' })
  @IsNumber()
  @IsOptional()
  pe_page_id: number;

  @ApiProperty({ description: 'Sort column ID' })
  @IsNumber()
  @IsOptional()
  pe_column_id: number;
}
