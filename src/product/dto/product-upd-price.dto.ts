import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductUpdPriceDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsNotEmpty()
  @IsString()
  pe_member_id!: string;

  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_produto!: number;

  @ApiProperty({ description: 'Wholesale Price', example: 199.99, minimum: 0 })
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsNotEmpty()
  @Min(0)
  pe_preco_venda_atac!: number;

  @ApiProperty({ description: 'Corporate Price', example: 249.99, minimum: 0 })
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsNotEmpty()
  @Min(0)
  pe_preco_venda_corporativo!: number;

  @ApiProperty({ description: 'Retail Price', example: 299.99, minimum: 0 })
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsNotEmpty()
  @Min(0)
  pe_preco_venda_vare!: number;
}
