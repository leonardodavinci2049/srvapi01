import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CustomerPdvCreateV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Seller ID', example: 29014 })
  @IsNumber()
  pe_seller_id!: number;

  @ApiProperty({
    description: 'Customer name',
    maxLength: 255,
    example: 'Maria Silva',
  })
  @IsString()
  @IsNotEmpty()
  pe_name!: string;

  @ApiProperty({
    description: 'Login email',
    maxLength: 255,
    example: 'maria.silva@example.com',
  })
  @IsString()
  @IsNotEmpty()
  pe_email!: string;

  @ApiProperty({
    description: 'Person type ID (1 = individual, 2 = company)',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  pe_person_type_id!: number;

  @ApiProperty({
    description: 'CNPJ (empty string when not applicable)',
    maxLength: 100,
    example: '',
  })
  @IsString()
  pe_cnpj!: string;

  @ApiProperty({
    description: 'Company name (empty string when not applicable)',
    maxLength: 255,
    example: '',
  })
  @IsString()
  pe_company_name!: string;

  @ApiProperty({
    description: 'CPF (empty string when not applicable)',
    maxLength: 100,
    example: '12345678901',
  })
  @IsString()
  pe_cpf!: string;

  @ApiProperty({
    description: 'Phone 1',
    maxLength: 100,
    example: '11999999999',
  })
  @IsString()
  pe_phone!: string;

  @ApiProperty({
    description: 'WhatsApp 1',
    maxLength: 100,
    example: '11999999999',
  })
  @IsString()
  pe_whatsapp!: string;

  @ApiProperty({
    description: 'Image 1 (path or URL)',
    maxLength: 500,
    example: '',
  })
  @IsString()
  pe_image!: string;

  @ApiProperty({
    description: 'ZIP code',
    maxLength: 100,
    example: '01310100',
  })
  @IsString()
  pe_zip_code!: string;

  @ApiProperty({
    description: 'Address',
    maxLength: 300,
    example: 'Av. Paulista',
  })
  @IsString()
  pe_address!: string;

  @ApiProperty({
    description: 'Address number',
    maxLength: 100,
    example: '1000',
  })
  @IsString()
  pe_address_number!: string;

  @ApiProperty({
    description: 'Complement',
    maxLength: 100,
    example: 'Apt 45',
    required: false,
  })
  @IsString()
  @IsOptional()
  pe_complement!: string;

  @ApiProperty({
    description: 'Neighborhood',
    maxLength: 300,
    example: 'Bela Vista',
  })
  @IsString()
  pe_neighborhood!: string;

  @ApiProperty({
    description: 'City',
    maxLength: 300,
    example: 'Sao Paulo',
  })
  @IsString()
  pe_city!: string;

  @ApiProperty({ description: 'State', maxLength: 100, example: 'SP' })
  @IsString()
  pe_state!: string;

  @ApiProperty({
    description: 'Notes',
    example: 'Cliente criado via PDV',
  })
  @IsString()
  pe_notes!: string;
}

/*
Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "Test User",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_seller_id": 29014,
  "pe_name": "Maria Silva",
  "pe_email": "maria.silva@example.com",
  "pe_person_type_id": 1,
  "pe_cnpj": "",
  "pe_company_name": "",
  "pe_cpf": "12345678901",
  "pe_phone": "11999999999",
  "pe_whatsapp": "11999999999",
  "pe_image": "",
  "pe_zip_code": "01310100",
  "pe_address": "Av. Paulista",
  "pe_address_number": "1000",
  "pe_complement": "Apt 45",
  "pe_neighborhood": "Bela Vista",
  "pe_city": "Sao Paulo",
  "pe_state": "SP",
  "pe_notes": "Cliente criado via PDV"
}
*/
