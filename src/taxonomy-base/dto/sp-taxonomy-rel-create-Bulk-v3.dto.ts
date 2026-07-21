import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class SpTaxonomyRelCreateBulkV3Dto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id!: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id!: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id!: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id!: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_id!: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name!: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role!: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id!: number;

  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  @Min(1)
  pe_id_taxonomy!: number;

  @ApiProperty({
    description: 'Product search term',
    minLength: 3,
    maxLength: 200,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  pe_filter_keyword!: string;

  @ApiProperty({ description: 'Taxonomy relationship level', required: false })
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(32767)
  pe_level?: number;
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
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_id_taxonomy": 187,
  "pe_filter_keyword": "HD SATA SSD",
  "pe_level": 1
}
*/
