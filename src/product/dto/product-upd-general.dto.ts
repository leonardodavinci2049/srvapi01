import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductUpdGeneralDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsNotEmpty()
  @IsString()
  pe_member_id!: string;

  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_produto!: number;

  @ApiProperty({
    description: 'Product Name',
    maxLength: 255,
    example: 'Nome do Produto',
  })
  @IsNotEmpty()
  @IsString()
  pe_nome_produto!: string;

  @ApiProperty({
    description: 'Product Reference',
    maxLength: 100,
    example: 'REF001',
  })
  @IsString()
  pe_ref!: string;

  @ApiProperty({
    description: 'Product Model',
    maxLength: 100,
    example: 'Model X',
  })
  @IsString()
  pe_modelo!: string;

  @ApiProperty({
    description: 'Product Label',
    maxLength: 100,
    example: 'Etiqueta Premium',
  })
  @IsString()
  pe_etiqueta!: string;

  @ApiProperty({
    description: 'Tab Description',
    maxLength: 200,
    example: 'Descrição da aba',
  })
  @IsString()
  pe_descricao_tab!: string;
}
