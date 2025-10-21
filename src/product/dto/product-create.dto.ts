import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class ProductCreateDto {
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

  // Organization & User Info
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

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  @IsNotEmpty()
  pe_type_business: number;

  // Product Basic Info
  @ApiProperty({ description: 'Product Name', maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  pe_nome_produto: string;

  // Product Basic Info
  @ApiProperty({ description: 'Product Slug', maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  pe_slug: string;

  @ApiProperty({
    description: 'Product Description',
    maxLength: 500,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_descricao_tab?: string;

  @ApiProperty({
    description: 'Product Label',
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_etiqueta?: string;

  @ApiProperty({
    description: 'Product Reference',
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_ref?: string;

  @ApiProperty({
    description: 'Product Model',
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_modelo?: string;

  // Relations
  @ApiProperty({ description: 'Supplier ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_fornecedor?: number;

  @ApiProperty({ description: 'Type ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_tipo?: number;

  @ApiProperty({ description: 'Brand ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_marca?: number;

  @ApiProperty({ description: 'Family ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_familia?: number;

  @ApiProperty({ description: 'Group ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_grupo?: number;

  @ApiProperty({ description: 'Subgroup ID', required: false })
  @IsOptional()
  @IsNumber()
  pe_id_subgrupo?: number;

  // Physical Characteristics
  @ApiProperty({ description: 'Weight in grams', required: false })
  @IsOptional()
  @IsNumber()
  pe_peso_gr?: number;

  @ApiProperty({ description: 'Length in millimeters', required: false })
  @IsOptional()
  @IsNumber()
  pe_comprimento_mm?: number;

  @ApiProperty({ description: 'Width in millimeters', required: false })
  @IsOptional()
  @IsNumber()
  pe_largura_mm?: number;

  @ApiProperty({ description: 'Height in millimeters', required: false })
  @IsOptional()
  @IsNumber()
  pe_altura_mm?: number;

  @ApiProperty({ description: 'Diameter in millimeters', required: false })
  @IsOptional()
  @IsNumber()
  pe_diametro_mm?: number;

  @ApiProperty({ description: 'Warranty period in months', required: false })
  @IsOptional()
  @IsNumber()
  pe_tempodegarantia_mes?: number;

  // Pricing
  @ApiProperty({ description: 'Wholesale price', required: false })
  @IsOptional()
  @IsNumber()
  pe_vl_venda_atacado?: number;

  @ApiProperty({ description: 'Retail price', required: false })
  @IsOptional()
  @IsNumber()
  pe_vl_venda_varejo?: number;

  @ApiProperty({ description: 'Corporate price', required: false })
  @IsOptional()
  @IsNumber()
  pe_vl_corporativo?: number;

  // Stock & Flags
  @ApiProperty({ description: 'Stock quantity', required: false })
  @IsOptional()
  @IsNumber()
  pe_qt_estoque?: number;

  @ApiProperty({ description: 'Website offline flag', required: false })
  @IsOptional()
  @IsNumber()
  pe_flag_website_off?: number;

  @ApiProperty({ description: 'Imported flag', required: false })
  @IsOptional()
  @IsNumber()
  pe_flag_importado?: number;

  @ApiProperty({ description: 'Additional information', required: false })
  @IsOptional()
  @IsString()
  pe_info?: string;
}
