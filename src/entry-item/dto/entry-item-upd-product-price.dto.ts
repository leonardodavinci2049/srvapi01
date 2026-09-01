import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryItemUpdProductPriceDto extends EndpointContextDto {
  @ApiProperty({
    description: 'Entry item movement ID (tbl_entrada_movimento)',
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_item_movement_id!: number;

  @ApiProperty({ description: 'Wholesale sale price (must be at least 0.1)' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_preco_venda_atac!: number;

  @ApiProperty({ description: 'Corporate sale price (must be at least 0.1)' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_preco_venda_corporativo!: number;

  @ApiProperty({ description: 'Retail sale price (must be at least 0.1)' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_preco_venda_vare!: number;
}
/*
Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_item_movement_id": 209971,
  "pe_preco_venda_atac": 190.11,
  "pe_preco_venda_corporativo": 230.12,
  "pe_preco_venda_vare": 240.13
}
*/
