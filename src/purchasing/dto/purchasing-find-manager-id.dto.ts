import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class PurchasingFindManagerIdDto extends EndpointContextDto {
  @ApiPropertyOptional({
    description:
      'Type business (reserved parameter; not used by the procedure body)',
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_type_business?: number | null;

  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_product_id!: number;
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
  "pe_user_role": "purchasing_manager",
  "pe_person_id": 29014,
  "pe_type_business": 1,
  "pe_product_id": 6146
}
*/
