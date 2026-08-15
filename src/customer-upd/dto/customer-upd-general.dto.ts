import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CustomerUpdGeneralDto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_customer_id!: number;

  @ApiProperty({ description: 'Name', maxLength: 300 })
  @IsString()
  @IsNotEmpty()
  pe_name!: string;

  @ApiProperty({ description: 'Phone 1', maxLength: 100 })
  @IsString()
  pe_phone!: string;

  @ApiProperty({ description: 'WhatsApp 1', maxLength: 100 })
  @IsString()
  pe_whatsapp!: string;

  @ApiProperty({ description: 'Login Email', maxLength: 100 })
  @IsString()
  pe_email!: string;

  @ApiProperty({ description: 'Image Path', maxLength: 500 })
  @IsString()
  pe_image_path!: string;
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
  "pe_name": "John Doe",
  "pe_phone": "+1234567890",
  "pe_whatsapp": "+1234567890",
  "pe_email": "john.doe@example.com",
  "pe_image_path": "/images/john_doe.jpg"
}
*/
