import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductUpdBrandDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsNotEmpty()
  @IsString()
  pe_member_id!: string;

  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_produto!: number;

  @ApiProperty({ description: 'Brand ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_id_marca!: number;
}
