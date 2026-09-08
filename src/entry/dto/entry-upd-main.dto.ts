import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryUpdMainDto extends EndpointContextDto {
  @ApiProperty({ description: 'Entry ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_entry_id!: number;

  @ApiProperty({ description: 'Invoice number', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_invoice_number!: string;

  @ApiProperty({
    description: 'Entry model (ex: NACIONAL/IMPORTADO)',
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  pe_model!: string;

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

  @ApiProperty({ description: 'Invoice total' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_invoice_total!: number;

  @ApiProperty({ description: 'Product total' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_product_total!: number;

  @ApiProperty({ description: 'Entry description' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  pe_description!: string;
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
  "pe_invoice_number": "7685",
  "pe_model": "IMPORTADO",
  "pe_freight_value": 22,
  "pe_freight_rate": 10,
  "pe_invoice_total": 1500.5,
  "pe_product_total": 1468.5,
  "pe_description": "Entrada de mercadoria importada"
}
*/
