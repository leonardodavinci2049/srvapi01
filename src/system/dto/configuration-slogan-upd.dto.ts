import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ConfigurationSloganUpdDto {
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

  @ApiProperty({ description: 'Configuration ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_id_configuration?: number;

  @ApiProperty({ description: 'Slogan 1', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan1?: string;

  @ApiProperty({ description: 'Slogan 2', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan2?: string;

  @ApiProperty({ description: 'Slogan 3', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan3?: string;

  @ApiProperty({ description: 'Slogan 4', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan4?: string;

  @ApiProperty({ description: 'Slogan 5', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan5?: string;

  @ApiProperty({ description: 'Call to Action 1' })
  @IsString()
  @IsOptional()
  pe_call_to_action1?: string;

  @ApiProperty({ description: 'Call to Action 2' })
  @IsString()
  @IsOptional()
  pe_call_to_action2?: string;

  @ApiProperty({ description: 'Call to Action 3' })
  @IsString()
  @IsOptional()
  pe_call_to_action3?: string;

  @ApiProperty({ description: 'Call to Action 4' })
  @IsString()
  @IsOptional()
  pe_call_to_action4?: string;

  @ApiProperty({ description: 'Call to Action 5' })
  @IsString()
  @IsOptional()
  pe_call_to_action5?: string;
}
