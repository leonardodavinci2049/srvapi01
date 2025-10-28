import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class BrandFindAllDto {
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

  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Brand ID', required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_id_marca?: number;

  @ApiProperty({ description: 'Brand name', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  pe_marca?: string;

  @ApiProperty({ description: 'Result limit', required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_limit?: number;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 100,
  "pe_store_id": 5,
  "pe_organization_id": "ORG_12345",
  "pe_member_id": "MBR_67890",
  "pe_user_id": "USR_54321",
  "pe_person_id": 999,
  "pe_id_marca": 15,
  "pe_marca": "Brand XYZ",
  "pe_limit": 100
}
*/
