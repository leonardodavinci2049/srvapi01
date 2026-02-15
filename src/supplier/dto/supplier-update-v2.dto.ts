import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class SupplierUpdateV2Dto {
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

  @ApiProperty({ description: 'Supplier ID' })
  @IsNumber()
  pe_supplier_id: number;

  @ApiProperty({ description: 'Supplier', maxLength: 100 })
  @IsString()
  pe_supplier: string;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_notes: string;

  @ApiProperty({ description: 'Inactive' })
  @IsNumber()
  pe_inactive: number;
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
  "pe_supplier_id": 123,
  "pe_supplier": "Updated Supplier Name",
  "pe_notes": "Some notes about the supplier",
  "pe_inactive": 0
}

*/
