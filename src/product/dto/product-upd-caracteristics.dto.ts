import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class ProductUpdCaracteristicsDto {
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

  @ApiProperty({ description: 'Weight in grams', example: 500 })
  @IsNotEmpty()
  @IsInt()
  pe_peso_gr: number;

  @ApiProperty({ description: 'Length in millimeters', example: 100 })
  @IsNotEmpty()
  @IsInt()
  pe_comprimento_mm: number;

  @ApiProperty({ description: 'Width in millimeters', example: 50 })
  @IsNotEmpty()
  @IsInt()
  pe_largura_mm: number;

  @ApiProperty({ description: 'Height in millimeters', example: 30 })
  @IsNotEmpty()
  @IsInt()
  pe_altura_mm: number;

  @ApiProperty({ description: 'Diameter in millimeters', example: 25 })
  @IsNotEmpty()
  @IsInt()
  pe_diametro_mm: number;

  @ApiProperty({ description: 'Warranty time in days', example: 30 })
  @IsNotEmpty()
  @IsInt()
  pe_tempodegarantia_dia: number;

  @ApiProperty({ description: 'Warranty time in months', example: 12 })
  @IsNotEmpty()
  @IsInt()
  pe_tempodegarantia_mes: number;
}
