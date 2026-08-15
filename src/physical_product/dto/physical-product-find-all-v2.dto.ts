import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class PhysicalProductFindAllV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  @IsOptional()
  pe_product_id!: number;

  @ApiProperty({ description: 'Stock Flag' })
  @IsNumber()
  @IsOptional()
  pe_stock_flag!: number;

  @ApiProperty({ description: 'Limit' })
  @IsNumber()
  @IsOptional()
  pe_limit!: number;
}

/*Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_product_id": 54580,
  "pe_stock_flag": 1,
  "pe_limit": 2
}
*/
