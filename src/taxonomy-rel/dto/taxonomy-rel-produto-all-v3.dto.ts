import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyRelProdutoAllV3Dto extends EndpointContextDto {
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
  "pe_record_id": 55608 
}

*/

/*
Sample JSON response:

{
    "statusCode": 100200,
    "message": "Cadastro Carregados com sucesso",
    "recordId": 1,
    "data": {
        "Brand find All": [
            {
                "ID_TAXONOMY": 3546,
                "TAXONOMIA": "AUDIO E VIDEO",
                "CREATEDAT": "2025-12-11T17:37:56.000Z"
            },
            {
                "ID_TAXONOMY": 3563,
                "TAXONOMIA": "Fone de Ouvido",
                "CREATEDAT": "2025-12-11T17:37:56.000Z"
            },
            {
                "ID_TAXONOMY": 3564,
                "TAXONOMIA": "Auricular Bluetooth",
                "CREATEDAT": "2025-12-11T17:37:56.000Z"
            }
        ]
    },
    "quantity": 3,
    "errorId": 0,
    "info1": ""
}

*/
