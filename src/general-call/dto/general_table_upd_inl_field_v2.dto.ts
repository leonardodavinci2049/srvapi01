import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class GeneralTableUpdInlFieldV2Dto extends EndpointContextDto {
  @ApiProperty({
    description: 'Nome da tabela que será atualizada',
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  pe_table_name!: string;

  @ApiProperty({
    description: 'Nome da coluna da chave primária que identifica o registro',
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  pe_primary_key_field!: string;

  @ApiProperty({ description: 'ID do registro que será atualizado' })
  @IsNumber()
  @IsNotEmpty()
  pe_register_id!: number;

  @ApiProperty({
    description: 'Tipo lógico do campo: 1=string, 2=bigint, 3=decimal, 4=date',
  })
  @IsNumber()
  @IsNotEmpty()
  pe_field_type!: number;

  @ApiProperty({
    description: 'Nome do único campo que será atualizado',
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  pe_field!: string;

  @ApiPropertyOptional({
    description: 'Valor para PE_FIELD_TYPE = 1 (string)',
  })
  @IsString()
  @IsOptional()
  pe_value_str?: string;

  @ApiPropertyOptional({
    description: 'Valor para PE_FIELD_TYPE = 2 (bigint)',
  })
  @IsNumber()
  @IsOptional()
  pe_value_int?: number;

  @ApiPropertyOptional({
    description: 'Valor para PE_FIELD_TYPE = 3 (decimal 18,6)',
  })
  @IsNumber()
  @IsOptional()
  pe_value_numeric?: number;

  @ApiPropertyOptional({
    description: 'Valor para PE_FIELD_TYPE = 4 (date no formato YYYY-MM-DD)',
  })
  @IsString()
  @IsOptional()
  pe_value_date?: string;
}

/*
Sample JSON for testing in body endpoint v2/general-table-upd-inl-field:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 1,
  "pe_table_name": "tbl_produto",
  "pe_primary_key_field": "ID_TBL_PRODUTO",
  "pe_register_id": 65506,
  "pe_field_type": 1,
  "pe_field": "PRODUTO",
  "pe_value_str": "Nome atualizado via API - teste opencode",
  "pe_value_int": null,
  "pe_value_numeric": null,
  "pe_value_date": null
}
*/
