import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CustomerInternetUpdV1 {
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

  @ApiProperty({ description: 'Customer ID', required: false })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  pe_customer_id?: number;

  @ApiProperty({ description: 'Website', maxLength: 500, required: false })
  @IsUrl()
  @IsOptional()
  @MaxLength(500)
  pe_website?: string;

  @ApiProperty({ description: 'Facebook', maxLength: 500, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_facebook?: string;

  @ApiProperty({ description: 'Twitter', maxLength: 500, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_twitter?: string;

  @ApiProperty({ description: 'LinkedIn', maxLength: 500, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_linkedin?: string;

  @ApiProperty({ description: 'Instagram', maxLength: 500, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_instagram?: string;

  @ApiProperty({ description: 'TikTok', maxLength: 500, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_tiktok?: string;

  @ApiProperty({ description: 'Telegram', maxLength: 500, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_telegram?: string;
}
