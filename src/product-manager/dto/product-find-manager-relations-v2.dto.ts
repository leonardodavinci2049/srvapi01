import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductFindManagerRelationsV2Dto extends EndpointContextDto {
  @ApiPropertyOptional({ description: 'Search by product ID or name (LIKE)' })
  @IsString()
  @IsOptional()
  @Length(0, 300)
  pe_search?: string | null;

  @ApiProperty({
    description:
      'Brand filter; only ONE of the three filters is applied per call. Values 0 or 1 are neutral',
    example: 0,
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_brand_id!: number;

  @ApiProperty({
    description:
      'Type filter; only ONE of the three filters is applied per call. Values 0 or 1 are neutral',
    example: 0,
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_type_id!: number;

  @ApiProperty({
    description:
      'Supplier filter; only ONE of the three filters is applied per call. Values 0 or 1 are neutral',
    example: 3,
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_supplier_id!: number;

  @ApiProperty({ description: 'Row limit applied by the procedure' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_limit!: number;
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
  "pe_person_id": 1,
  "pe_search": null,
  "pe_brand_id": 0,
  "pe_type_id": 0,
  "pe_supplier_id": 3,
  "pe_limit": 5
}
*/
