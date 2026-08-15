import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CustomerUpdAddressDto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_customer_id!: number;

  @ApiProperty({ description: 'Zip Code', maxLength: 100 })
  @IsString()
  pe_zip_code!: string;

  @ApiProperty({ description: 'Address', maxLength: 300 })
  @IsString()
  pe_address!: string;

  @ApiProperty({ description: 'Address Number', maxLength: 100 })
  @IsString()
  pe_address_number!: string;

  @ApiProperty({ description: 'Complement', maxLength: 100 })
  @IsString()
  pe_complement!: string;

  @ApiProperty({ description: 'Neighborhood', maxLength: 300 })
  @IsString()
  pe_neighborhood!: string;

  @ApiProperty({ description: 'City', maxLength: 300 })
  @IsString()
  pe_city!: string;

  @ApiProperty({ description: 'State', maxLength: 100 })
  @IsString()
  pe_state!: string;

  @ApiProperty({ description: 'City Code', maxLength: 100 })
  @IsString()
  pe_city_code!: string;

  @ApiProperty({ description: 'State Code', maxLength: 100 })
  @IsString()
  pe_state_code!: string;
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
  "pe_customer_id": 47723,
  "pe_zip_code": "12345-678",
  "pe_address": "123 Main St",
  "pe_address_number": "100",
  "pe_complement": "Apt 1",
  "pe_neighborhood": "Downtown",
  "pe_city": "Metropolis",
  "pe_state": "StateName",
  "pe_city_code": "CITY123",
  "pe_state_code": "ST123"  
}
*/
