import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CustomerUpdBusinessDto {
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

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_customer_id: number;

  @ApiProperty({ description: 'CNPJ', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_cnpj: string;

  @ApiProperty({ description: 'Company Name', maxLength: 300 })
  @IsString()
  @IsNotEmpty()
  pe_company_name: string;

  @ApiProperty({ description: 'State Registration', maxLength: 100 })
  @IsString()
  pe_state_registration: string;

  @ApiProperty({ description: 'Municipal Registration', maxLength: 100 })
  @IsString()
  pe_municipal_registration: string;

  @ApiProperty({ description: 'Responsible Name', maxLength: 300 })
  @IsString()
  pe_responsible_name: string;

  @ApiProperty({ description: 'Main Activity', maxLength: 300 })
  @IsString()
  pe_main_activity: string;
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
  "pe_customer_id": 47723,
  "pe_cnpj": "12.345.678/0001-90",
  "pe_company_name": "Example Company Ltda",
  "pe_state_registration": "123456789",
  "pe_municipal_registration": "987654321",
  "pe_responsible_name": "John Doe",
  "pe_main_activity": "Retail"  
}
*/
