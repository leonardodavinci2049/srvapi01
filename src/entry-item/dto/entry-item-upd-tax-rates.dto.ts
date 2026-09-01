import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryItemUpdTaxRatesDto extends EndpointContextDto {
  @ApiProperty({
    description: 'Entry item movement ID (tbl_entrada_movimento)',
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_item_movement_id!: number;

  @ApiProperty({ description: 'ICMS tax value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_vl_icms!: number;

  @ApiProperty({ description: 'IPI tax value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_vl_ipi!: number;

  @ApiProperty({ description: 'ST tax value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_vl_st!: number;

  @ApiProperty({ description: 'IBS tax value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_vl_ibs!: number;

  @ApiProperty({ description: 'CBS tax value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_vl_cbs!: number;

  @ApiProperty({ description: 'ICMS base value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_base_icms!: number;

  @ApiProperty({ description: 'ST base value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_base_st!: number;

  @ApiProperty({ description: 'IPI base value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_base_ipi!: number;

  @ApiProperty({ description: 'IBS base value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_base_ibs!: number;

  @ApiProperty({ description: 'CBS base value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_base_cbs!: number;
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
  "pe_vl_icms": 11,
  "pe_vl_ipi": 12,
  "pe_vl_st": 13,
  "pe_vl_ibs": 14,
  "pe_vl_cbs": 15,
  "pe_base_icms": 16,
  "pe_base_st": 17,
  "pe_base_ipi": 18,
  "pe_base_ibs": 19,
  "pe_base_cbs": 20
}
*/
