import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryItemUpdDollarValueDto extends EndpointContextDto {
  @ApiProperty({
    description: 'Entry item movement ID (tbl_entrada_movimento)',
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_item_movement_id!: number;

  @ApiProperty({
    description: 'Dollar exchange rate (must be greater than zero)',
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_dollar_exchange_rate!: number;
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
  "pe_dollar_exchange_rate": 5.4319
}
*/
