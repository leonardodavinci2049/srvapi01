import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CustomerBusinessUpdDto {
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

  @ApiProperty({ description: 'CNPJ', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_cnpj?: string;

  @ApiProperty({
    description: 'Razão social',
    maxLength: 300,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_razao_social?: string;

  @ApiProperty({
    description: 'Inscrição estadual',
    maxLength: 100,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_insc_estadual?: string;

  @ApiProperty({
    description: 'Inscrição municipal',
    maxLength: 100,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_insc_municipal?: string;

  @ApiProperty({
    description: 'Nome do responsável',
    maxLength: 300,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_nome_responsavel?: string;

  @ApiProperty({
    description: 'Atividade principal',
    maxLength: 300,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_atividade_principal?: string;
}
