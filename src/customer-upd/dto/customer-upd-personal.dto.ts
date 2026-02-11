import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CustomerUpdPersonalDto {
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

  @ApiProperty({ description: 'CPF', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_cpf: string;

  @ApiProperty({ description: 'First Name', maxLength: 300 })
  @IsString()
  @IsNotEmpty()
  pe_first_name: string;

  @ApiProperty({ description: 'Last Name', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_last_name: string;

  @ApiProperty({ description: 'Image Path', maxLength: 100 })
  @IsString()
  pe_image_path: string;

  @ApiProperty({ description: 'Birth Date' })
  @IsString()
  pe_birth_date: string;
}
