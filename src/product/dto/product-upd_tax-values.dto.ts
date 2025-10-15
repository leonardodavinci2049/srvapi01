import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsNumber } from 'class-validator';

export class ProductUpdTaxValuesDto {
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

  @ApiProperty({ description: 'CFOP Code', maxLength: 100, example: '5102' })
  @IsNotEmpty()
  @IsString()
  pe_cfop: string;

  @ApiProperty({ description: 'CST Code', maxLength: 100, example: '00' })
  @IsNotEmpty()
  @IsString()
  pe_cst: string;

  @ApiProperty({
    description: 'EAN Code',
    maxLength: 100,
    example: '7891234567890',
  })
  @IsNotEmpty()
  @IsString()
  pe_ean: string;

  @ApiProperty({ description: 'NBM Code', maxLength: 100, example: '12345678' })
  @IsNotEmpty()
  @IsString()
  pe_nbm: string;

  @ApiProperty({ description: 'NCM Code', example: 12345678 })
  @IsNotEmpty()
  @IsInt()
  pe_ncm: number;

  @ApiProperty({ description: 'PPB Code', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_ppb: number;

  @ApiProperty({ description: 'Temperature', example: 25.5 })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 6 })
  pe_temp: number;
}
