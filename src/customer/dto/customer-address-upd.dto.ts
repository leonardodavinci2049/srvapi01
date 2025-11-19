import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CustomerAddressUpdDto {
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

  @ApiProperty({ description: 'Customer ID', required: false })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  pe_customer_id?: number;

  @ApiProperty({ description: 'CEP', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_cep?: string;

  @ApiProperty({ description: 'Endereço', maxLength: 300, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_endereco?: string;

  @ApiProperty({
    description: 'Número do endereço',
    maxLength: 100,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_endereco_numero?: string;

  @ApiProperty({
    description: 'Complemento',
    maxLength: 100,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_complemento?: string;

  @ApiProperty({ description: 'Bairro', maxLength: 300, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_bairro?: string;

  @ApiProperty({ description: 'Cidade', maxLength: 300, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_cidade?: string;

  @ApiProperty({ description: 'UF', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_uf?: string;

  @ApiProperty({
    description: 'Código do município (IBGE)',
    maxLength: 100,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_cod_municipio?: string;

  @ApiProperty({
    description: 'Código da UF (IBGE)',
    maxLength: 100,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_cod_uf?: string;
}
