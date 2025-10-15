import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, Min, IsInt, IsString } from 'class-validator';

export class ProductUpdPriceDto {
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

  @ApiProperty({ description: 'Wholesale Price', example: 199.99, minimum: 0 })
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsNotEmpty()
  @Min(0)
  pe_preco_venda_atac: number;

  @ApiProperty({ description: 'Corporate Price', example: 249.99, minimum: 0 })
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsNotEmpty()
  @Min(0)
  pe_preco_venda_corporativo: number;

  @ApiProperty({ description: 'Retail Price', example: 299.99, minimum: 0 })
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsNotEmpty()
  @Min(0)
  pe_preco_venda_vare: number;
}
