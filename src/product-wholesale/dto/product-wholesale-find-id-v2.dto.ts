import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductWholesaleFindIdV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID', example: 0 })
  @IsNumber()
  @Type(() => Number)
  pe_customer_id!: number;

  @ApiPropertyOptional({ description: 'Product ID', example: 55768 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_product_id?: number;

  @ApiPropertyOptional({
    description: 'Product Slug',
    maxLength: 300,
    example: 'perfume-exemplo',
  })
  @IsOptional()
  @IsString()
  pe_product_slug?: string;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_customer_id": 0,
  "pe_product_id": 55768,
  "pe_product_slug": ""
}
*/
