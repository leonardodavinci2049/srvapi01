import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class EntryItemCreateV2Dto extends EndpointContextDto {
  @ApiPropertyOptional({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsOptional()
  pe_member_id?: string;

  @ApiProperty({ description: 'Entry ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_entry_id!: number;

  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_product_id!: number;
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
  "pe_member_id": "MEMBER001",
  "pe_entry_id": 29451,
  "pe_product_id": 54496
}
*/
