import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class BrandUpdateV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Brand ID' })
  @IsNumber()
  pe_brand_id!: number;

  @ApiProperty({ description: 'Brand', maxLength: 100 })
  @IsString()
  pe_brand!: string;

  @ApiProperty({ description: 'Image Path', maxLength: 500 })
  @IsString()
  pe_image_path!: string;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_notes!: string;

  @ApiProperty({ description: 'Inactive' })
  @IsNumber()
  pe_inactive!: number;
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
  "pe_brand_id": 123,
  "pe_brand": "Brand Name",
  "pe_image_path": "/images/brand-name.png",
  "pe_notes": "Some notes about the brand",
  "pe_inactive": 0

}



*/
