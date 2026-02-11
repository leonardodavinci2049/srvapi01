import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CustomerUpdInternetDto {
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

  @ApiProperty({ description: 'Website', maxLength: 500 })
  @IsString()
  @IsNotEmpty()
  pe_website: string;

  @ApiProperty({ description: 'Facebook', maxLength: 500 })
  @IsString()
  @IsNotEmpty()
  pe_facebook: string;

  @ApiProperty({ description: 'Twitter', maxLength: 500 })
  @IsString()
  @IsNotEmpty()
  pe_twitter: string;

  @ApiProperty({ description: 'LinkedIn', maxLength: 500 })
  @IsString()
  @IsNotEmpty()
  pe_linkedin: string;

  @ApiProperty({ description: 'Instagram', maxLength: 500 })
  @IsString()
  @IsNotEmpty()
  pe_instagram: string;

  @ApiProperty({ description: 'TikTok', maxLength: 500 })
  @IsString()
  @IsNotEmpty()
  pe_tiktok: string;

  @ApiProperty({ description: 'Telegram', maxLength: 500 })
  @IsString()
  @IsNotEmpty()
  pe_telegram: string;
}
