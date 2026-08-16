import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductUpdCaracteristicsDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsNotEmpty()
  @IsString()
  pe_member_id!: string;

  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_produto!: number;

  @ApiProperty({ description: 'Weight in grams', example: 500 })
  @IsNotEmpty()
  @IsInt()
  pe_peso_gr!: number;

  @ApiProperty({ description: 'Length in millimeters', example: 100 })
  @IsNotEmpty()
  @IsInt()
  pe_comprimento_mm!: number;

  @ApiProperty({ description: 'Width in millimeters', example: 50 })
  @IsNotEmpty()
  @IsInt()
  pe_largura_mm!: number;

  @ApiProperty({ description: 'Height in millimeters', example: 30 })
  @IsNotEmpty()
  @IsInt()
  pe_altura_mm!: number;

  @ApiProperty({ description: 'Diameter in millimeters', example: 25 })
  @IsNotEmpty()
  @IsInt()
  pe_diametro_mm!: number;

  @ApiProperty({ description: 'Warranty time in days', example: 30 })
  @IsNotEmpty()
  @IsInt()
  pe_tempodegarantia_dia!: number;

  @ApiProperty({ description: 'Warranty time in months', example: 12 })
  @IsNotEmpty()
  @IsInt()
  pe_tempodegarantia_mes!: number;
}
