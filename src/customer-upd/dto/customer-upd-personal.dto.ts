import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CustomerUpdPersonalDto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_customer_id!: number;

  @ApiProperty({ description: 'CPF', maxLength: 100 })
  @IsString()
  pe_cpf!: string;

  @ApiProperty({ description: 'First Name', maxLength: 300 })
  @IsString()
  pe_first_name!: string;

  @ApiProperty({ description: 'Last Name', maxLength: 100 })
  @IsString()
  pe_last_name!: string;

  @ApiProperty({ description: 'Image Path', maxLength: 100 })
  @IsString()
  pe_image_path!: string;

  @ApiProperty({ description: 'Birth Date' })
  @IsString()
  pe_birth_date!: string;
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
  "pe_customer_id": 47723,
  "pe_cpf": "123.456.789-00",
  "pe_first_name": "John",
  "pe_last_name": "Doe",
  "pe_image_path": "/images/john_doe.jpg",
  "pe_birth_date": "1990-01-01"
  }
*/
