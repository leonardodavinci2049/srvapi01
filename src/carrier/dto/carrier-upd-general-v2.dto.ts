import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CarrierUpdGeneralV2Dto extends EndpointContextDto {
  @ApiProperty({
    description: 'Carrier ID (tbl_transportadora.ID_TRANSPORTADORA)',
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_carrier_id!: number;

  @ApiProperty({
    description: 'Carrier name; empty values are rejected by the procedure',
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 300)
  pe_name!: string;

  @ApiPropertyOptional({
    description: 'Main phone; null clears the field',
  })
  @IsString()
  @IsOptional()
  @Length(0, 200)
  pe_phone1?: string | null;

  @ApiPropertyOptional({
    description: 'WhatsApp number; null clears the field',
  })
  @IsString()
  @IsOptional()
  @Length(0, 200)
  pe_whatsapp1?: string | null;

  @ApiPropertyOptional({
    description: 'Contact name; null clears the field',
  })
  @IsString()
  @IsOptional()
  @Length(0, 200)
  pe_contact1?: string | null;

  @ApiPropertyOptional({
    description: 'Main email; null clears the field',
  })
  @IsString()
  @IsOptional()
  @Length(0, 200)
  pe_email1?: string | null;
}
/*
Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "Mundial",
  "pe_user_id": "19372846",
  "pe_user_name": "Leobardo",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_carrier_id": 1718,
  "pe_name": "Transportadora Horizonte Materiais de Construção Ltda",
  "pe_phone1": "(11) 3031-7482",
  "pe_whatsapp1": "(11) 98452-7391",
  "pe_contact1": "Marcelo Tavares de Almeida",
  "pe_email1": "comercial@horizontemateriais.com.br"
}
*/
