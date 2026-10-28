import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TypeUpdInlNameV2Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Type ID (tbl_produto_tipo.ID_TIPO)' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_type_id!: number;

  @ApiProperty({
    description: 'New type name; validates uniqueness within the client',
    maxLength: 100,
    example: 'Tipo Exemplo',
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  pe_type_name!: string;
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
  "pe_type_id": 1,
  "pe_type_name": "Tipo Exemplo"
}
*/
