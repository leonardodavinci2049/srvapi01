import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class SpTaxonomyFindMenuManagerV3Dto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id!: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id!: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id!: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id!: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_id!: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name!: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role!: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id!: number;

  @ApiProperty({
    description: 'Status filter: 0=all, 1=inactive, 2=active',
    enum: [0, 1, 2],
  })
  @IsNumber()
  @IsIn([0, 1, 2])
  pe_flag_status!: number;

  @ApiProperty({
    description: 'Operation filter: 0=all, 1=taxonomies without products',
    enum: [0, 1],
  })
  @IsNumber()
  @IsIn([0, 1])
  pe_flag_operation!: number;

  @ApiProperty({ description: 'Maximum number of taxonomies', maximum: 10000 })
  @IsNumber()
  @Min(1)
  @Max(10000)
  pe_limit!: number;
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
  "pe_flag_status": 0,
  "pe_flag_operation": 0,
  "pe_limit": 100
}
*/
