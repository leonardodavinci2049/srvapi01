import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductFindPremiumV1Dto {
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

  @ApiProperty({ description: 'Search', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_search?: string;

  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  @IsOptional()
  pe_idTaxonomy?: number;

  @ApiProperty({ description: 'Type ID' })
  @IsNumber()
  @IsOptional()
  pe_idTipo?: number;

  @ApiProperty({ description: 'Brand ID' })
  @IsNumber()
  @IsOptional()
  pe_idMarca?: number;

  @ApiProperty({ description: 'Stock Flag' })
  @IsNumber()
  @IsOptional()
  pe_flagEstoque?: number;

  @ApiProperty({ description: 'Service Flag' })
  @IsNumber()
  @IsOptional()
  pe_flagServico?: number;

  @ApiProperty({ description: 'Promotions Flag' })
  @IsNumber()
  @IsOptional()
  pe_flagPromotions?: number;

  @ApiProperty({ description: 'Highlight Flag' })
  @IsNumber()
  @IsOptional()
  pe_flagHighlight?: number;

  @ApiProperty({ description: 'Launch Flag' })
  @IsNumber()
  @IsOptional()
  pe_flagLancamento?: number;

  @ApiProperty({ description: 'Quantity of Records' })
  @IsNumber()
  @IsOptional()
  pe_qtRegistros?: number;

  @ApiProperty({ description: 'Page ID' })
  @IsNumber()
  @IsOptional()
  pe_paginaId?: number;

  @ApiProperty({ description: 'Column ID' })
  @IsNumber()
  @IsOptional()
  pe_colunaId?: number;

  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  @IsOptional()
  pe_ordemId?: number;

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
    "pe_search": "search term",
    "pe_idTaxonomy": 123,
    "idTipo": 456,
    "pe_idMarca": 789,
    "pe_flagEstoque": 1,
    "pe_flagServico": 0,
    "pe_flagPromotions": 1,
    "pe_flagHighlight": 0,
    "pe_flagLancamento": 1,
    "pe_qtRegistros": 10,
    "pe_paginaId": 1,
    "pe_colunaId": 2,
    "pe_ordemId": 3

}

*/
