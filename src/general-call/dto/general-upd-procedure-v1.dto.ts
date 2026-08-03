import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class GeneralUpdProcedureV1Dto extends EndpointContextDto {
  @ApiPropertyOptional({ description: 'Register ID' })
  @IsNumber()
  @IsOptional()
  pe_register_id?: number;

  @ApiPropertyOptional({ description: 'Procedure Name', maxLength: 200 })
  @IsString()
  @IsOptional()
  pe_procedure_name?: string;

  @ApiPropertyOptional({ description: 'Field Type' })
  @IsNumber()
  @IsOptional()
  pe_field_type?: number;

  @ApiPropertyOptional({ description: 'Field', maxLength: 200 })
  @IsString()
  @IsOptional()
  pe_field?: string;

  @ApiPropertyOptional({ description: 'Value String' })
  @IsString()
  @IsOptional()
  pe_value_str?: string;

  @ApiPropertyOptional({ description: 'Value Integer' })
  @IsNumber()
  @IsOptional()
  pe_value_int?: number;

  @ApiPropertyOptional({ description: 'Value Numeric (Decimal 18,6)' })
  @IsNumber()
  @IsOptional()
  pe_value_numeric?: number;

  @ApiPropertyOptional({ description: 'Value Date' })
  @IsString()
  @IsOptional()
  pe_value_date?: string;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_register_id": 1,
  "pe_procedure_name": "sp_example_v1",
  "pe_field_type": 1,
  "pe_field": "example_field",
  "pe_value_str": "example",
  "pe_value_int": 1,
  "pe_value_numeric": 10.5,
  "pe_value_date": "2026-05-06"
}
*/
