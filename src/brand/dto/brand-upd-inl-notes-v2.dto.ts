import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class BrandUpdInlNotesV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Brand ID (tbl_produto_marca.ID_MARCA)' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_brand_id!: number;

  @ApiPropertyOptional({
    description: 'Brand notes; null clears the field',
    example: 'Anotação fictícia de teste',
  })
  @IsString()
  @IsOptional()
  pe_notes?: string | null;
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
  "pe_brand_id": 1,
  "pe_notes": "Anotação fictícia de teste"
}
*/
