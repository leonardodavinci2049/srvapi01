import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class TaxonomyRelProdutoAllV3Dto {
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

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsNotEmpty()
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Record ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_record_id: number;
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
