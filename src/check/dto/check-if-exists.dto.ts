import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CheckIfExistsDto {
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
  @IsOptional()
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Search term', minLength: 3 })
  @IsString({ message: 'TERMO must be a valid string' })
  @IsNotEmpty()
  @MinLength(3, { message: 'TERMO must have at least 3 characters' })
  pe_term: string;
}
