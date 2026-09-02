import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @ApiProperty({ description: 'Exchange rate' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_exchange_rate!: number;
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
  "pe_exchange_rate": 5.12
}
*/
