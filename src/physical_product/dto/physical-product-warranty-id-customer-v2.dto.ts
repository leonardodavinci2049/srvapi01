import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class PhysicalProductWarrantyIdCustomerV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_customer_id!: number;

  @ApiProperty({ description: 'Physical ID' })
  @IsNumber()
  @IsOptional()
  pe_physical_id!: number;
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
  "pe_customer_id": 2967,
  "pe_physical_id": 1364853
}
*/
