import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CostumerCreateDto {
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
  @IsNotEmpty()
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_person_id: number;

  @ApiProperty({ description: 'Name', maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  pe_name: string;

  @ApiProperty({ description: 'Login email', maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  pe_email: string;

  @ApiProperty({ description: 'Person type ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_person_type_id: number;

  @ApiProperty({ description: 'CNPJ', maxLength: 100 })
  @IsString()
  pe_cnpj: string;

  @ApiProperty({ description: 'Company name', maxLength: 255 })
  @IsString()
  pe_company_name: string;

  @ApiProperty({ description: 'CPF', maxLength: 100 })
  @IsString()
  pe_cpf: string;

  @ApiProperty({ description: 'Phone 1', maxLength: 100 })
  @IsString()
  pe_phone: string;

  @ApiProperty({ description: 'WhatsApp 1', maxLength: 100 })
  @IsString()
  pe_whatsapp: string;

  @ApiProperty({ description: 'Image 1', maxLength: 500 })
  @IsString()
  pe_image: string;

  @ApiProperty({ description: 'ZIP code', maxLength: 100 })
  @IsString()
  pe_zip_code: string;

  @ApiProperty({ description: 'Address', maxLength: 300 })
  @IsString()
  pe_address: string;

  @ApiProperty({ description: 'Address number', maxLength: 100 })
  @IsString()
  pe_address_number: string;

  @ApiProperty({ description: 'Complement', maxLength: 100 })
  @IsString()
  pe_complement: string;

  @ApiProperty({ description: 'Neighborhood', maxLength: 300 })
  @IsString()
  pe_neighborhood: string;

  @ApiProperty({ description: 'City', maxLength: 300 })
  @IsString()
  pe_city: string;

  @ApiProperty({ description: 'State', maxLength: 100 })
  @IsString()
  pe_state: string;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_notes: string;
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
  "pe_name": "John Doe",
  "pe_email": "
  "pe_person_type_id": 1,
  "pe_cnpj": "12345678000199",
  "pe_company_name": "Doe Enterprises",
  "pe_cpf": "12345678901",
  "pe_phone": "11999999999",
  "pe_whatsapp": "11999999999",
  "pe_image": "http://example.com/image.jpg",
  "pe_zip_code": "12345678",
  "pe_address": "Rua Exemplo",
  "pe_address_number": "123",
  "pe_complement": "Apt 45",
  "pe_neighborhood": "Bairro Exemplo",
  "pe_city": "Cidade Exemplo",
  "pe_state": "SP",
  "pe_notes": "Cliente VIP"

}
*/
