import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductUpdTaxValuesDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsNotEmpty()
  @IsString()
  pe_member_id!: string;

  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_produto!: number;

  @ApiProperty({ description: 'CFOP Code', maxLength: 100, example: '5102' })
  @IsNotEmpty()
  @IsString()
  pe_cfop!: string;

  @ApiProperty({ description: 'CST Code', maxLength: 100, example: '00' })
  @IsNotEmpty()
  @IsString()
  pe_cst!: string;

  @ApiProperty({
    description: 'EAN Code',
    maxLength: 100,
    example: '7891234567890',
  })
  @IsNotEmpty()
  @IsString()
  pe_ean!: string;

  @ApiProperty({ description: 'NBM Code', maxLength: 100, example: '12345678' })
  @IsNotEmpty()
  @IsString()
  pe_nbm!: string;

  @ApiProperty({ description: 'NCM Code', example: 12345678 })
  @IsNotEmpty()
  @IsInt()
  pe_ncm!: number;

  @ApiProperty({ description: 'PPB Code', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_ppb!: number;

  @ApiProperty({ description: 'Temperature', example: 25.5 })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 6 })
  pe_temp!: number;
}
