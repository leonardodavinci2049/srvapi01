import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductUpdTaxValuesV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  pe_product_id!: number;

  @ApiProperty({ description: 'CFOP', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  pe_cfop!: string;

  @ApiProperty({ description: 'CST', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  pe_cst!: string;

  @ApiProperty({ description: 'EAN', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  pe_ean!: string;

  @ApiProperty({ description: 'NBM', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  pe_nbm!: string;

  @ApiProperty({ description: 'NCM', required: false })
  @IsOptional()
  @IsNumber()
  pe_ncm!: number;

  @ApiProperty({ description: 'PPB', required: false })
  @IsOptional()
  @IsNumber()
  pe_ppb!: number;

  @ApiProperty({ description: 'TEMP', required: false })
  @IsOptional()
  @IsNumber()
  pe_temp!: number;
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
  "pe_cfop": "CFOP001",
  "pe_cst": "CST001",
  "pe_ean": "EAN001",
  "pe_nbm": "NBM001",
  "pe_ncm": 12345678,
  "pe_ppb": 10.5,
  "pe_temp": 5.0
}

*/
