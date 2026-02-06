import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class OrderItemUpdNotesDto {
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

  @ApiProperty({ description: 'Order Item ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_order_item_id: number;

  @ApiProperty({ description: 'Notes', maxLength: 500, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_notes?: string;
}
