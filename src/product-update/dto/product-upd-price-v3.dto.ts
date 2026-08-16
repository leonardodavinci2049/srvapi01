import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductUpdPriceV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  pe_product_id!: number;

  @ApiProperty({ description: 'Wholesale sale price', required: false })
  @IsOptional()
  @IsNumber()
  pe_wholesale_price!: number;

  @ApiProperty({ description: 'Corporate sale price', required: false })
  @IsOptional()
  @IsNumber()
  pe_corporate_price!: number;

  @ApiProperty({ description: 'Retail sale price', required: false })
  @IsOptional()
  @IsNumber()
  pe_retail_price!: number;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_product_id": 56813,
  "pe_wholesale_price": 100.00,
  "pe_corporate_price": 120.00,
  "pe_retail_price": 150.00

}
*/
