import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class OrdersFindLatestDto {
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

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_customer_id: number;

  @ApiProperty({ description: 'Salesperson ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_seller_id: number;

  @ApiProperty({ description: 'Order Status ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_order_status_id: number;

  @ApiProperty({ description: 'Financial Status ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_financial_status_id: number;

  @ApiProperty({ description: 'Location ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_location_id: number;

  @ApiProperty({ description: 'Initial Date' })
  @Type(() => Date)
  @IsOptional()
  pe_initial_date: Date;

  @ApiProperty({ description: 'Final Date' })
  @Type(() => Date)
  @IsOptional()
  pe_final_date: Date;

  @ApiProperty({ description: 'Limit' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @Min(1)
  pe_limit: number;
}
