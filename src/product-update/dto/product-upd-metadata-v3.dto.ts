import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductUpdMetadataV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  pe_product_id!: number;

  @ApiProperty({ description: 'Meta title', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  pe_meta_title!: string;

  @ApiProperty({
    description: 'Meta description',
    maxLength: 200,
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_meta_description!: string;
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
  "pe_meta_title": "Sample Meta Title",
  "pe_meta_description": "This is a sample meta description for the product."

}

*/
