import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyRelDeleteV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_taxonomy_id!: number;

  @ApiProperty({ description: 'Record ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_record_id!: number;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_taxonomy_id": 3566,
  "pe_record_id": 56819 
}

*/

/*
Sample JSON response:

{
    "statusCode": 100200,
    "message": "Cadastro excluído com sucesso.",
    "recordId": 3566,
    "data": [
        {
            "sp_return_id": 3566,
            "sp_message": "Cadastro excluído com sucesso.",
            "sp_error_id": 0
        }
    ],
    "quantity": 1,
    "errorId": 0,
    "info1": ""
}

*/
