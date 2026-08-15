import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CustomerUpdInternetDto extends EndpointContextDto {
  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_customer_id!: number;

  @ApiProperty({ description: 'Website', maxLength: 500 })
  @IsString()
  pe_website!: string;

  @ApiProperty({ description: 'Facebook', maxLength: 500 })
  @IsString()
  pe_facebook!: string;

  @ApiProperty({ description: 'Twitter', maxLength: 500 })
  @IsString()
  pe_twitter!: string;

  @ApiProperty({ description: 'LinkedIn', maxLength: 500 })
  @IsString()
  pe_linkedin!: string;

  @ApiProperty({ description: 'Instagram', maxLength: 500 })
  @IsString()
  pe_instagram!: string;

  @ApiProperty({ description: 'TikTok', maxLength: 500 })
  @IsString()
  pe_tiktok!: string;

  @ApiProperty({ description: 'Telegram', maxLength: 500 })
  @IsString()
  pe_telegram!: string;
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
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_customer_id": 47723,
  "pe_website": "https://www.example.com",
  "pe_facebook": "https://www.facebook.com/example",
  "pe_twitter": "https://www.twitter.com/example",
  "pe_linkedin": "https://www.linkedin.com/in/example",
  "pe_instagram": "https://www.instagram.com/example",
  "pe_tiktok": "https://www.tiktok.com/@example",
  "pe_telegram": "https://t.me/example"
}
*/
