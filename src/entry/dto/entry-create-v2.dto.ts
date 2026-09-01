import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryCreateV2Dto extends EndpointContextDto {
  @ApiPropertyOptional({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsOptional()
  pe_member_id?: string;

  @ApiProperty({ description: 'Supplier ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_supplier_id!: number;

  @ApiProperty({ description: 'Carrier ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_carrier_id!: number;

  @ApiProperty({ description: 'Category ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_category_id!: number;

  @ApiProperty({ description: 'Invoice number', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_invoice_number!: string;

  @ApiProperty({
    description: 'Entry model (ex: NACIONAL/IMPORTADO)',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  pe_model!: string;

  @ApiProperty({ description: 'Total invoice value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_total_invoice_value!: number;

  @ApiProperty({ description: 'Total product value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_total_product_value!: number;

  @ApiProperty({ description: 'Freight value' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_freight_value!: number;

  @ApiProperty({ description: 'Freight rate' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_freight_rate!: number;

  @ApiProperty({ description: 'Exchange rate' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_exchange_rate!: number;

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

  @ApiProperty({ description: 'Notes' })
  @IsString()
  @IsNotEmpty()
  pe_notes!: string;
}
/*
Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_member_id": "MEMBER001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "admin",
  "pe_person_id": 29014,

  "pe_supplier_id": 36923,
  "pe_carrier_id": 15822,
  "pe_category_id": 28470,

  "pe_invoice_number": "7685",
  "pe_model": "IMPORTADO",
  "pe_total_invoice_value": 100,
  "pe_total_product_value": 100,
  "pe_freight_value": 18,
  "pe_freight_rate": 5.35,
  "pe_exchange_rate": 5.78,
  "pe_vl_icms": 1,
  "pe_vl_ipi": 1,
  "pe_vl_pis": 1,
  "pe_vl_confins": 1,
  "pe_vl_ibs": 1,
  "pe_vl_cbs": 1,
  "pe_notes": "Notas da entrada de teste"
}
*/
