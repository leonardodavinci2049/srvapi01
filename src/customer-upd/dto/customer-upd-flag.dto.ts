import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CustomerUpdFlagDto {
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

  @ApiProperty({ description: 'Client' })
  @IsNumber()
  pe_client: number;

  @ApiProperty({ description: 'Seller' })
  @IsNumber()
  pe_seller: number;

  @ApiProperty({ description: 'Supplier' })
  @IsNumber()
  pe_supplier: number;

  @ApiProperty({ description: 'Professional' })
  @IsNumber()
  pe_professional: number;

  @ApiProperty({ description: 'Employee' })
  @IsNumber()
  pe_employee: number;

  @ApiProperty({ description: 'Restriction' })
  @IsNumber()
  pe_restriction: number;
}
