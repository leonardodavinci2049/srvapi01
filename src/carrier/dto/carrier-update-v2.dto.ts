import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CarrierUpdateV2Dto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Member Role', maxLength: 200 })
  @IsString()
  pe_member_role: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Name', maxLength: 300 })
  @IsString()
  pe_name: string;

  @ApiProperty({ description: 'Phone', maxLength: 100 })
  @IsString()
  pe_phone: string;

  @ApiProperty({ description: 'WhatsApp', maxLength: 100 })
  @IsString()
  pe_whatsapp: string;

  @ApiProperty({ description: 'Email', maxLength: 100 })
  @IsString()
  pe_email: string;

  @ApiProperty({ description: 'Website', maxLength: 300 })
  @IsString()
  pe_website: string;

  @ApiProperty({ description: 'CNPJ (Company Tax ID)', maxLength: 100 })
  @IsString()
  pe_cnpj: string;

  @ApiProperty({ description: 'Company Legal Name', maxLength: 300 })
  @IsString()
  pe_company_name: string;

  @ApiProperty({ description: 'Responsible Name', maxLength: 300 })
  @IsString()
  pe_responsible_name: string;

  @ApiProperty({ description: 'CPF (Individual Tax ID)', maxLength: 100 })
  @IsString()
  pe_cpf: string;

  @ApiProperty({ description: 'Image Path', maxLength: 300 })
  @IsString()
  pe_image_path: string;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_notes: string;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 3,
  "pe_organization_id": "ORG001",
  "pe_member_role": "saller",
  "pe_user_id": "USER001",
  "pe_person_id": 29014,
  "pe_name": "Carrier Name",
  "pe_phone": "1234567890",
  "pe_whatsapp": "1234567890",
  "pe_email": "test@example.com",
  "pe_website": "https://www.example.com",
  "pe_cnpj": "12.345.678/0001-90",
  "pe_company_name": "Example Company Ltda",
  "pe_responsible_name": "John Doe",
  "pe_cpf": "123.456.789-00",
  "pe_image_path": "/images/carrier-name.png",
  "pe_notes": "Some notes about the carrier"

}

*/
