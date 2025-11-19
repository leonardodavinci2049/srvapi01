import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CustomerFlagUpdV1 {
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

  @ApiProperty({
    description: 'Flag Cliente (0=Não, 1=Sim)',
    minimum: 0,
    maximum: 1,
    required: false,
  })
  @IsInt()
  @Min(0)
  @Max(1)
  @IsOptional()
  @Type(() => Number)
  pe_cliente?: number;

  @ApiProperty({
    description: 'Flag Vendedor (0=Não, 1=Sim)',
    minimum: 0,
    maximum: 1,
    required: false,
  })
  @IsInt()
  @Min(0)
  @Max(1)
  @IsOptional()
  @Type(() => Number)
  pe_vendedor?: number;

  @ApiProperty({
    description: 'Flag Fornecedor (0=Não, 1=Sim)',
    minimum: 0,
    maximum: 1,
    required: false,
  })
  @IsInt()
  @Min(0)
  @Max(1)
  @IsOptional()
  @Type(() => Number)
  pe_fornecedor?: number;

  @ApiProperty({
    description: 'Flag Profissional (0=Não, 1=Sim)',
    minimum: 0,
    maximum: 1,
    required: false,
  })
  @IsInt()
  @Min(0)
  @Max(1)
  @IsOptional()
  @Type(() => Number)
  pe_profissional?: number;

  @ApiProperty({
    description: 'Flag Funcionário (0=Não, 1=Sim)',
    minimum: 0,
    maximum: 1,
    required: false,
  })
  @IsInt()
  @Min(0)
  @Max(1)
  @IsOptional()
  @Type(() => Number)
  pe_funcionario?: number;

  @ApiProperty({
    description: 'Flag Restrição (0=Não, 1=Sim)',
    minimum: 0,
    maximum: 1,
    required: false,
  })
  @IsInt()
  @Min(0)
  @Max(1)
  @IsOptional()
  @Type(() => Number)
  pe_restricao?: number;
}
