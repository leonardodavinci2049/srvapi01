import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductUpdStockDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsNotEmpty()
  @IsString()
  pe_member_id!: string;

  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_produto!: number;

  @ApiProperty({ description: 'Stock Quantity', example: 100, minimum: 0 })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  pe_qt_estoque!: number;

  @ApiProperty({ description: 'Minimum Quantity', example: 10, minimum: 0 })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  pe_qt_minimo!: number;
}
