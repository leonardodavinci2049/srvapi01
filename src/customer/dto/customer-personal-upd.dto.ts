import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CustomerPersonalUpdDto {
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

  @ApiProperty({ description: 'CPF', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_cpf?: string;

  @ApiProperty({
    description: 'Primeiro nome',
    maxLength: 300,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_primeiro_nome?: string;

  @ApiProperty({ description: 'Sobrenome', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_sobrenome?: string;

  @ApiProperty({
    description: 'Caminho da imagem',
    maxLength: 100,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_path_imagem?: string;

  @ApiProperty({
    description: 'Data de nascimento (YYYY-MM-DD)',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  pe_datadonascimento?: string;
}
