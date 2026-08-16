import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class SpTaxonomyRelCreateBulkV3Dto extends EndpointContextDto {
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
