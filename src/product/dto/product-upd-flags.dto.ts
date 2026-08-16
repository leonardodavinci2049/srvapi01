import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductFlagsDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsNotEmpty()
  @IsString()
  pe_member_id!: string;

  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_produto!: number;

  @ApiProperty({ description: 'Inactive Flag', example: 0 })
  @IsNotEmpty()
  @IsInt()
  pe_flag_inativo!: number;

  @ApiProperty({ description: 'Imported Flag', example: 0 })
  @IsNotEmpty()
  @IsInt()
  pe_flag_importado!: number;

  @ApiProperty({ description: 'Physical Control Flag', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_flag_controle_fisico!: number;

  @ApiProperty({ description: 'Stock Control Flag', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_flag_controle_estoque!: number;

  @ApiProperty({ description: 'Highlight Flag', example: 0 })
  @IsNotEmpty()
  @IsInt()
  pe_flag_destaque!: number;

  @ApiProperty({ description: 'Promotion Flag', example: 0 })
  @IsNotEmpty()
  @IsInt()
  pe_flag_promocao!: number;

  @ApiProperty({ description: 'Discontinued Flag', example: 0 })
  @IsNotEmpty()
  @IsInt()
  pe_flag_descontinuado!: number;

  @ApiProperty({ description: 'Service Flag', example: 0 })
  @IsNotEmpty()
  @IsInt()
  pe_flag_servico!: number;

  @ApiProperty({ description: 'Website Off Flag', example: 0 })
  @IsNotEmpty()
  @IsInt()
  pe_flag_website_off!: number;
}
