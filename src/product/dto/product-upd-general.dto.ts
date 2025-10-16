import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class ProductUpdGeneralDto {
  @ApiProperty({ description: 'App ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_app_id: number;

  @ApiProperty({ description: 'System Client ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_system_client_id: number;

  @ApiProperty({ description: 'Store ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_store_id: number;

  @ApiProperty({
    description: 'Organization ID',
    maxLength: 200,
    example: 'ORG001',
  })
  @IsNotEmpty()
  @IsString()
  pe_organization_id: string;

  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsNotEmpty()
  @IsString()
  pe_member_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200, example: 'USER001' })
  @IsNotEmpty()
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Person ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_person_id: number;

  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_produto: number;

  @ApiProperty({
    description: 'Product Name',
    maxLength: 255,
    example: 'Nome do Produto',
  })
  @IsNotEmpty()
  @IsString()
  pe_nome_produto: string;

  @ApiProperty({
    description: 'Product Reference',
    maxLength: 100,
    example: 'REF001',
  })
  @IsString()
  pe_ref: string;

  @ApiProperty({
    description: 'Product Model',
    maxLength: 100,
    example: 'Model X',
  })
  @IsString()
  pe_modelo: string;

  @ApiProperty({
    description: 'Product Label',
    maxLength: 100,
    example: 'Etiqueta Premium',
  })
  @IsString()
  pe_etiqueta: string;

  @ApiProperty({
    description: 'Tab Description',
    maxLength: 200,
    example: 'Descrição da aba',
  })
  @IsString()
  pe_descricao_tab: string;
}
