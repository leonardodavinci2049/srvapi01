import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class OrdersFindSellerIdDto {
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
  @IsOptional()
  pe_person_id: number;

  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_order_id: number;

  @ApiProperty({ description: 'Salesperson ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_seller_id: number;

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_type_business: number;
}
