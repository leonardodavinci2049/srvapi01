import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryUpdTaxRatesDto extends EndpointContextDto {
  @ApiProperty({ description: 'Entry ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_entry_id!: number;

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

  @ApiProperty({ description: 'PIS tax value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_vl_pis!: number;

  @ApiProperty({ description: 'COFINS tax value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_vl_confins!: number;

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
  "pe_entry_id": 29451,
  "pe_vl_icms": 10,
  "pe_vl_ipi": 11,
  "pe_vl_pis": 12,
  "pe_vl_confins": 13,
  "pe_vl_ibs": 14,
  "pe_vl_cbs": 15
}
*/
