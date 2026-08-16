import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyUpdInlQtProductsV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_taxonomy_id!: number;

  @ApiProperty({ description: 'Quantity of Products' })
  @IsNumber()
  @IsNotEmpty()
  pe_qt_products!: number;
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
  "pe_taxonomy_id": 3566,
  "pe_qt_products": 25
}

*/
